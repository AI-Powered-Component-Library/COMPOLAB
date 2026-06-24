import React, { useState } from "react";

export const ToggleSwitch = ({
  checked = false,
  onChange = () => {},
  label = "Dark Mode",
  size = "md",
  accent = "#7c3aed",
  bg = "#0f172a",
  disabled = false
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const sizes = {
    sm: { width: 40, height: 20, thumb: 16 },
    md: { width: 50, height: 24, thumb: 20 },
    lg: { width: 60, height: 28, thumb: 24 }
  };
  const s = sizes[size];
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "system-ui,sans-serif" }}>
      <label style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", cursor: disabled ? "not-allowed" : "pointer", userSelect: "none" }}>{label}</label>
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggle}
        disabled={disabled}
        style={{
          width: s.width + "px",
          height: s.height + "px",
          borderRadius: s.height / 2 + "px",
          border: "none",
          background: isChecked ? accent : "rgba(255,255,255,0.15)",
          cursor: disabled ? "not-allowed" : "pointer",
          position: "relative",
          outline: "none",
          transition: "background 0.25s ease",
          boxShadow: isChecked ? "0 0 10px " + alpha(accent, 0.4) : "none"
        }}
      >
        <span
          style={{
            position: "absolute",
            top: (s.height - s.thumb) / 2 + "px",
            left: isChecked ? s.width - s.thumb - (s.height - s.thumb) / 2 + "px" : (s.height - s.thumb) / 2 + "px",
            width: s.thumb + "px",
            height: s.thumb + "px",
            borderRadius: "50%",
            background: isChecked ? "#fff" : "rgba(255,255,255,0.5)",
            transition: "left 0.25s ease, background 0.25s ease",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
          }}
        />
      </button>
    </div>
  );
};