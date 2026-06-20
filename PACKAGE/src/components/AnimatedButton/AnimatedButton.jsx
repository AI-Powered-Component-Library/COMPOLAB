import React, { useState, useRef, useEffect } from "react";

export const AnimatedButton = ({
  text = "Hover Me",
  bg = "#7c3aed",
  color = "#fff",
  size = "md",
  disabled = false,
  loading = false,
  onClick = () => {},
  icon = null
}) => {
  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState(null);
  const buttonRef = useRef(null);
  const sizes = { sm: "8px 16px", md: "11px 24px", lg: "14px 32px" };
  const fontSizes = { sm: "13px", md: "15px", lg: "17px" };

  useEffect(() => {
    if (ripple) {
      const timer = setTimeout(() => setRipple(null), 600);
      return () => clearTimeout(timer);
    }
  }, [ripple]);

  const handleClick = (e) => {
    if (disabled || loading) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
    onClick();
  };

  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled || loading}
      style={{
        position: "relative",
        overflow: "hidden",
        background: bg,
        color: color,
        padding: sizes[size],
        borderRadius: "12px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "700",
        fontSize: fontSizes[size],
        fontFamily: "system-ui,sans-serif",
        boxShadow: hovered ? "0 6px 20px " + alpha(bg, 0.4) : "0 4px 14px " + alpha(bg, 0.3),
        opacity: disabled ? 0.6 : 1,
        transition: "box-shadow 0.2s, transform 0.1s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px"
      }}
    >
      {ripple && (
        <span
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: alpha(color, 0.3),
            transform: "translate(-50%, -50%) scale(0)",
            animation: "ripple 0.6s ease-out",
            pointerEvents: "none",
            left: ripple.x + "px",
            top: ripple.y + "px",
            width: "200%",
            height: "200%",
            zIndex: 0
          }}
        />
      )}
      {loading ? (
        <div style={{ width: "18px", height: "18px", border: "2px solid " + alpha(color, 0.3), borderTopColor: color, borderRadius: "50%", animation: "spin 0.8s linear infinite", position: "relative", zIndex: 1 }} />
      ) : (
        <>
          {icon && <div style={{ position: "relative", zIndex: 1 }}>{icon}</div>}
          <span style={{ position: "relative", zIndex: 1 }}>{text}</span>
        </>
      )}
      <style>{`
        @keyframes ripple {
          to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};