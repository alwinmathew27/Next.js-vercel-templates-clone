import React from "react";

interface CommonBtnProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  padding?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  border?: string;
}

const CommonBtn: React.FC<CommonBtnProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
  padding = "px-4 py-2",
  bgColor = "bg-white",
  textColor = "text-black",
  hoverColor = "hover:bg-gray-200",
  border = "border border-transparent", // Default no border
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} ${bgColor} ${textColor} rounded-lg ${hoverColor} font-semibold hover:opacity-80 transition  ${border} ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonBtn;

