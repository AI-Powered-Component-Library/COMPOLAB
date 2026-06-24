import React from "react";

export const PostCard = ({
  title = "Getting Started with React Hooks",
  excerpt = "A comprehensive guide to mastering React Hooks in your next project.",
  author = "Jane Doe",
  date = "May 15, 2023",
  readTime = "5 min read",
  likes = 24,
  comments = 8,
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  accent = "#6366f1",
  bg = "#0f172a",
  onClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onClick={onClick}
      style={{
        width: "320px",
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
        border: "1px solid " + alpha(accent, 0.15),
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s"
      }}
    >
      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
      </div>
      <div style={{ padding: "18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", fontSize: "12px" }}>
          <span style={{ color: alpha(accent, 0.8), fontWeight: "600" }}>{author}</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>{date}</span>
          <span style={{ color: "rgba(255,255,255,0.35)" }}>{readTime}</span>
        </div>
        <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{title}</h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: "0 0 16px" }}>{excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            <span>{likes}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            <span>{comments}</span>
          </div>
          <div style={{ marginLeft: "auto", width: "24px", height: "24px", borderRadius: "6px", background: alpha(accent, 0.15), display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};