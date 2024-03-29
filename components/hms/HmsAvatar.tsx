import React from "react";
import { getAvatarBg } from "./lib/getAvatarBg";

interface Props {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  customSize?: number;
}

const HmsAvatar: React.FC<Props> = ({
  name,
  className = "",
  size = "sm",
  customSize = 0,
}) => {
  const { initials, color } = getAvatarBg(name);
  const sizeClass = {
    sm: "w-8 h-8 text-xs",
    md: "w-16 h-16 text-lg",
    lg: "w-20 h-20 text-3xl",
    xl: "w-32 h-32 text-5xl",
  };
  let custom = {};
  if (customSize) {
    custom = {
      width: customSize,
      height: customSize,
    };
  }
  return (
    <div
      className={`flex items-center justify-center object-cover font-bold text-slate-300 ${sizeClass[size]} rounded-full ${className}`}
      style={{ backgroundColor: color, ...custom }}
    >
      {initials}
    </div>
  );
};

export default HmsAvatar;
