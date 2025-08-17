'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  event: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <motion.div 
        className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="z-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl w-12 h-12 rounded-full mr-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </motion.div>
            
            {/* Timeline content */}
            <motion.div 
              className="flex-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-card border border-white/20 p-6 hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 
                className="font-bold text-slate-800 text-lg mb-2" 
                style={{ fontFamily: 'Exo 2, sans-serif' }}
              >
                {item.date}
              </h3>
              <p 
                className="text-slate-600 font-medium" 
                style={{ fontFamily: 'Exo 2, sans-serif' }}
              >
                {item.event}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
