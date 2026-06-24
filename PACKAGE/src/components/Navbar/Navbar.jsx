import React, { useState, useEffect } from "react";

export const Navbar = ({
  logo = "Nexus",
  links = ["Home", "About", "Services", "Contact"],
  ctaText = "Sign Up",
  accent = "#6366f1",
  bg = "#0f172a",
  onCtaClick = () => {},
  onLinkClick = () => {}
}) => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav style={{ background: scrolled ? bg : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", fontFamily: "system-ui,-apple-system,sans-serif", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1000 }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 20px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.6) + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "800", color: "#fff" }}>{logo[0]}</div>
          <span style={{ fontSize: "18px", fontWeight: "800", color: "#fff", letterSpacing: "-0.5px" }}>{logo}</span>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => { setActive(link); onLinkClick(link); }}
              style={{
                background: active === link ? alpha(accent, 0.15) : "transparent",
                border: "none",
                padding: "10px 18px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: active === link ? "700" : "500",
                color: active === link ? "#fff" : "rgba(255,255,255,0.55)",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s"
              }}
            >{link}</button>
          ))}
        </div>
        <button
          onClick={onCtaClick}
          style={{
            padding: "10px 22px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.75) + ")",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 14px " + alpha(accent, 0.3),
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0px)"}
        >{ctaText}</button>
      </div>
    </nav>
  );
};