import React, { useState, useEffect } from "react";

export const DigitalClock = ({
  bg = "#0f172a",
  accent = "#6366f1",
  textColor = "#ffffff",
  dateColor = "rgba(255,255,255,0.5)",
  fontSize = 64,
  showSeconds = true,
  showDate = true,
  format = "12h"
}) => {
  const [time, setTime] = useState(new Date());
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    
    if (format === "12h") {
      hours = hours % 12 || 12;
    }
    
    const formattedHours = hours.toString().padStart(2, "0");
    let timeString = formattedHours + ":" + minutes;
    if (showSeconds) {
      timeString += ":" + seconds;
    }
    if (format === "12h") {
      timeString += " " + ampm;
    }
    return timeString;
  };

  const getDateString = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayName = days[time.getDay()];
    const monthName = months[time.getMonth()];
    const day = time.getDate();
    const year = time.getFullYear();
    
    return dayName + ", " + monthName + " " + day + ", " + year;
  };

  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      padding: "32px",
      width: "320px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      border: "1px solid " + alpha(accent, 0.2),
      fontFamily: "system-ui,sans-serif",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.3) + ")"
      }} />
      <div style={{
        fontSize: fontSize + "px",
        fontWeight: "800",
        color: textColor,
        letterSpacing: "2px",
        marginBottom: showDate ? "8px" : "0"
      }}>
        {formatTime()}
      </div>
      {showDate && (
        <div style={{
          fontSize: "14px",
          color: dateColor,
          fontWeight: "500",
          letterSpacing: "1px"
        }}>
          {getDateString()}
        </div>
      )}
      <div style={{
        position: "absolute",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: accent,
        boxShadow: "0 0 15px " + alpha(accent, 0.6)
      }} />
    </div>
  );
};