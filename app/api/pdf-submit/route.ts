import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import { IncomingMessage } from 'http';

export const config = {
  api: {
    bodyParser: false, // Disables Next.js body parsing to handle file uploads
  },
};

async function parseForm(req: NextRequest): Promise<{ file: formidable.File | null }> {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: false, maxFileSize: 10 * 1024 * 1024 });
    form.parse(req as unknown as IncomingMessage, (err, fields, files) => {
      if (err) return reject(err);
      const file = files.pdf as formidable.File | undefined;
      resolve({ file: file || null });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const { file } = await parseForm(req);
    if (!file || file.mimetype !== 'application/pdf') {
      return NextResponse.json({ error: 'Please upload a valid PDF file.' }, { status: 400 });
    }
    const fileBuffer = await fs.readFile(file.filepath);

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New PDF Submission',
      text: 'A new PDF has been submitted.',
      attachments: [
        {
          filename: file.originalFilename || 'submission.pdf',
          content: fileBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'PDF submitted and emailed successfully!' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return NextResponse.json({ error: 'Failed to process submission.' }, { status: 500 });
  }
}
