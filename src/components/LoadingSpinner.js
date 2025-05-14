import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ isDarkMode }) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`w-16 h-16 border-4 rounded-full ${
            isDarkMode
              ? "border-blue-500 border-t-transparent"
              : "border-blue-600 border-t-transparent"
          }`}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-lg font-medium ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
