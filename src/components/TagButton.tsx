"use client";
import React from "react";
import { useState } from "react";

interface TagInfo {
  number?: number;
  color: string;
  children: React.ReactNode;
}

const TagButton: React.FC<TagInfo> = ({ number, color, children }) => {
  const [bg, setBg] = useState(`${color}33`);
  return (
    <div
      className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-full px-3 py-1.5 transition-colors duration-200"
      style={{ backgroundColor: bg }}
      onMouseOver={() => {
        setBg(`${color}66`);
      }}
      onMouseLeave={() => {
        setBg(`${color}33`);
      }}
    >
      {children}
      <span className="ml-1 font-funnel text-xs text-gray-700 mdlg:text-sm">
        {number && (number / 1000).toFixed(2) + "k"}
      </span>
    </div>
  );
};

export default TagButton;
