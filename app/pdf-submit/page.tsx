"use client";
import React, { useRef, useState, DragEvent } from "react";

export default function PdfSubmitPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setStatus(null);
    } else {
      setSelectedFile(null);
      setStatus("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setStatus(null);
    } else {
      setSelectedFile(null);
      setStatus("Only PDF files are allowed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    if (!selectedFile) {
      setStatus("Please select a PDF file.");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    try {
      const res = await fetch("/api/pdf-submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("PDF submitted and emailed successfully!");
        setSelectedFile(null);
        formRef.current?.reset();
      } else {
        setStatus(data.error || "Submission failed.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-8 bg-[#18181b] rounded-2xl shadow-2xl border border-cyan-900/40">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-300 drop-shadow">Submit a PDF</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data" autoComplete="off">
        <label
          htmlFor="pdf"
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-colors duration-200 cursor-pointer h-48 bg-[#23232a] hover:border-cyan-400/80 focus-within:border-cyan-400/80 ${dragActive ? "border-cyan-400 bg-cyan-900/10" : "border-cyan-700/40"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          tabIndex={0}
        >
          <svg className="w-12 h-12 text-cyan-400 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-4 4m4-4l4 4M20 16.5V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.5" />
          </svg>
          <span className="text-cyan-200 font-medium text-lg mb-1">Drag & drop your PDF here</span>
          <span className="text-gray-400 text-sm">or click to select a file</span>
          <input
            type="file"
            id="pdf"
            name="pdf"
            accept="application/pdf"
            required
            className="hidden"
            onChange={handleFileChange}
            disabled={loading}
          />
          {selectedFile && (
            <span className="mt-3 text-cyan-300 text-sm font-mono truncate max-w-xs">{selectedFile.name}</span>
          )}
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 text-lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit PDF"}
        </button>
        {status && (
          <div className={`text-center mt-2 text-base font-medium ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>{status}</div>
        )}
      </form>
    </div>
  );
}
