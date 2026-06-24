import React, { useState } from "react";

export const ProductCard = ({
  image = "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&q=80",
  name = "Wireless Pro Headphones",
  description = "Premium noise-cancelling with 30-hour battery life and crystal-clear sound quality.",
  price = 299,
  originalPrice = 399,
  rating = 4.8,
  reviewCount = 1284,
  inStock = true,
  badgeText = "Best Seller",
  discount = 25,
  accent = "#7c3aed",
  bg = "#0f172a",
  onAddToCart = () => {},
  onWishlist = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        width: "280px",
        color: "#fff",
        fontFamily: "system-ui,-apple-system,sans-serif",
        boxShadow: hovered ? "0 14px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.06)")
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, transparent 50%)" }}>
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", top: "12px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {badgeText && (
            <div style={{ padding: "4px 10px", borderRadius: "6px", background: accent, fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>{badgeText}</div>
          )}
          <button onClick={onWishlist} style={{ width: "32px", height: "32px", borderRadius: "50%", background: alpha(accent, 0.15), border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = alpha(accent, 0.3)} onMouseLeave={(e) => e.currentTarget.style.background = alpha(accent, 0.15)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </button>
        </div>
        {discount > 0 && (
          <div style={{ position: "absolute", bottom: "12px", right: "12px", padding: "6px 12px", borderRadius: "8px", background: "rgba(225,29,72,0.9)", fontSize: "11px", fontWeight: "700", color: "#fff" }}>{discount}% OFF</div>
        )}
      </div>
      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 6px", lineHeight: 1.4, letterSpacing: "-0.2px" }}>{name}</h3>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: "0 0 12px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#e0e0e0" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: "600", color: "#fff" }}>{rating}</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>({reviewCount.toLocaleString()})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
            {originalPrice && (
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "line-through" }}>${originalPrice}</span>
            )}
            <span style={{ fontSize: "18px", fontWeight: "800", color: accent }}>${price}</span>
          </div>
          {!inStock && (
            <span style={{ fontSize: "11px", fontWeight: "600", color: "#e11d48" }}>Out of Stock</span>
          )}
        </div>
        <button
          onClick={onAddToCart}
          disabled={!inStock}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: inStock ? "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" : "rgba(255,255,255,0.08)",
            color: inStock ? "#fff" : "rgba(255,255,255,0.35)",
            fontSize: "14px",
            fontWeight: "700",
            cursor: inStock ? "pointer" : "not-allowed",
            fontFamily: "inherit",
            transition: "opacity 0.2s"
          }}
        >{inStock ? "Add to Cart" : "Notify Me"}</button>
      </div>
    </div>
  );
};