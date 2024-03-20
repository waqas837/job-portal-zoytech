"use client";
import React, { useState } from "react";

const CopyToClipBoard = ({ content }) => {
  const [text, settext] = useState("Copy");
  const copied = () => {
    navigator.clipboard.writeText(content);
    settext("Copied");
    setTimeout(() => {
      settext("Copy");
    }, 2000);
  };
  return (
    <div>
      <button
        onClick={copied}
        type="button"
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2"
      >
        {text}
      </button>
    </div>
  );
};

export default CopyToClipBoard;
