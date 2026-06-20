var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  AnimatedButton: () => AnimatedButton,
  Button: () => Button,
  CodeCard: () => CodeCard
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.jsx
var import_react = __toESM(require("react"));
var Button = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, "Button");
};

// src/components/CodeCard/CodeCard.jsx
var import_react2 = __toESM(require("react"));
function CodeCard() {
  return /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-full max-w-2xl mx-auto px-4 md:px-0 flex items-center justify-center mt-12 transition-all duration-500 hover:scale-[1.02]" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-slate-950/80 backdrop-blur-xl w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-mono relative" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "absolute top-0 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "bg-slate-900/60 px-5 py-4 flex items-center justify-between border-b border-slate-800/80" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition duration-150 cursor-pointer shadow-sm" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition duration-150 cursor-pointer shadow-sm" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-500 transition duration-150 cursor-pointer shadow-sm" })), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-400 text-sm font-medium ml-2 select-none" }, "App.jsx")), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs select-none" }, "React")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "p-6 overflow-x-auto" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "text-slate-300 text-sm leading-relaxed space-y-2.5" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "1"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-pink-400" }, "import"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " ", "{ "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-cyan-400" }, "Button"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, ", "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-cyan-400" }, "Card"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " ", "} "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-pink-400" }, "from"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-teal-300" }, " 'virtual-ui'"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, ";")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "2"), /* @__PURE__ */ import_react2.default.createElement("span", null, "\xA0")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "3"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-pink-400" }, "export"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-pink-400" }, " default"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-pink-400" }, " function"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-yellow-300" }, " App"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, "() ", "{")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "4"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-400 ml-4" }, "return"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " (")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "5"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300 ml-8" }, "<"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-cyan-400 font-medium" }, "Card"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-yellow-400/90" }, "title"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, "="), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-teal-300" }, '"Dashboard"'), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, ">")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "6"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300 ml-12" }, "<"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-cyan-400 font-medium" }, "Button"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-yellow-400/90" }, "variant"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, "="), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-teal-300" }, '"primary"'), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " "), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-yellow-400/90" }, "onClick"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, "="), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-indigo-400" }, "{"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-yellow-300" }, "handleClick"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-indigo-400" }, "}"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, " />")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "7"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300 ml-8" }, "</"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-cyan-400 font-medium" }, "Card"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, ">")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "8"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300 ml-4" }, ");")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-600 text-xs w-6 select-none" }, "9"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-slate-300" }, "}"))))));
}

// src/components/AnimatedButton/AnimatedButton.jsx
var import_react3 = __toESM(require("react"));
var AnimatedButton = ({
  text = "Hover Me",
  bg = "#7c3aed",
  color = "#fff",
  size = "md",
  disabled = false,
  loading = false,
  onClick = () => {
  },
  icon = null
}) => {
  const [hovered, setHovered] = (0, import_react3.useState)(false);
  const [ripple, setRipple] = (0, import_react3.useState)(null);
  const buttonRef = (0, import_react3.useRef)(null);
  const sizes = { sm: "8px 16px", md: "11px 24px", lg: "14px 32px" };
  const fontSizes = { sm: "13px", md: "15px", lg: "17px" };
  (0, import_react3.useEffect)(() => {
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
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      ref: buttonRef,
      onClick: handleClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      disabled: disabled || loading,
      style: {
        position: "relative",
        overflow: "hidden",
        background: bg,
        color,
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
      }
    },
    ripple && /* @__PURE__ */ import_react3.default.createElement(
      "span",
      {
        style: {
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
        }
      }
    ),
    loading ? /* @__PURE__ */ import_react3.default.createElement("div", { style: { width: "18px", height: "18px", border: "2px solid " + alpha(color, 0.3), borderTopColor: color, borderRadius: "50%", animation: "spin 0.8s linear infinite", position: "relative", zIndex: 1 } }) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, icon && /* @__PURE__ */ import_react3.default.createElement("div", { style: { position: "relative", zIndex: 1 } }, icon), /* @__PURE__ */ import_react3.default.createElement("span", { style: { position: "relative", zIndex: 1 } }, text)),
    /* @__PURE__ */ import_react3.default.createElement("style", null, `
        @keyframes ripple {
          to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `)
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedButton,
  Button,
  CodeCard
});
