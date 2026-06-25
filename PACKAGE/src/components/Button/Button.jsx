import React from "react";

export const Button = ({ text = "Click Me", bg = "#7c3aed", color = "#fff", size = "md", disabled = false, onClick = () => {} }) => {
  const sizes = { sm: "8px 16px", md: "11px 24px", lg: "14px 32px" };
  const fontSizes = { sm: "13px", md: "15px", lg: "17px" };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: bg,
        color: color,
        padding: sizes[size],
        fontSize: fontSizes[size],
        borderRadius: "10px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "700",
        fontFamily: "system-ui,-apple-system,sans-serif",
        boxShadow: "0 4px 14px rgba(124,58,237,0.4)",
        opacity: disabled ? 0.6 : 1,
        transition: "opacity 0.2s, transform 0.1s",
        transform: disabled ? "scale(1)" : "scale(1)"
      }}
    >
      {text}
    </button>
  );
};