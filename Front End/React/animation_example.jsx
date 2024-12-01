import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for the expandable box
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Framer Motion Example
      </h1>

      {/* Basic Animation */}
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded-lg mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Rotating Box */}
      </motion.div>

      {/* Gesture-Based Animation */}
      <motion.div
        className="w-20 h-20 bg-green-500 rounded-lg mb-6"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Hover & Tap Animation */}
      </motion.div>

      {/* Layout Animation */}
      <motion.div
        className={`w-64 bg-purple-500 text-white rounded-lg p-4 mb-6 ${
          isOpen ? "h-64" : "h-20"
        }`}
        layout
        onClick={toggleOpen}
        transition={{ duration: 0.5 }}
      >
        <p>{isOpen ? "Click to collapse" : "Click to expand"}</p>
      </motion.div>

      {/* Enter/Exit Animation */}
      <div className="relative">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={toggleOpen}
        >
          {isOpen ? "Hide Circle" : "Show Circle"}
        </button>
        {isOpen && (
          <motion.div
            className="absolute w-20 h-20 bg-yellow-500 rounded-full mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
