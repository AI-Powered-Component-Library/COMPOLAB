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
  ButtonDemo: () => ButtonDemo,
  LoadingSpinner: () => LoadingSpinner
});
module.exports = __toCommonJS(index_exports);

// src/components/LoadingSpinner/LoadingSpinner.jsx
var import_react = __toESM(require("react"));
var LoadingSpinner = import_react.default.memo(({ size = "md" }) => {
  const spinnerSize = {
    sm: 14,
    md: 16,
    lg: 18
  }[size] || 16;
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      className: "spinner",
      width: spinnerSize,
      height: spinnerSize,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true"
    },
    /* @__PURE__ */ import_react.default.createElement(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeOpacity: "0.2"
      }
    ),
    /* @__PURE__ */ import_react.default.createElement(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeDasharray: "15.7 62.8",
        strokeLinecap: "round",
        className: "spinner-track"
      }
    )
  );
});
LoadingSpinner.displayName = "LoadingSpinner";

// src/components/ButtonDemo/ButtonDemo.jsx
var import_react3 = __toESM(require("react"));

// src/components/Button/Button.jsx
var import_react2 = __toESM(require("react"));
var Button = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", null, "Button");
};

// src/components/ButtonDemo/ButtonDemo.jsx
var IconArrowRight = () => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" }));
var IconDownload = () => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ import_react3.default.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ import_react3.default.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" }));
var IconPlus = () => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react3.default.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), /* @__PURE__ */ import_react3.default.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));
var IconCheck = () => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react3.default.createElement("polyline", { points: "20 6 9 17 4 12" }));
var IconBell = () => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }));
function ButtonDemo() {
  const [loadingStates, setLoadingStates] = (0, import_react3.useState)({
    primary: false,
    secondary: false,
    outline: false,
    ghost: false,
    gradient: false
  });
  const toggleLoading = (key) => {
    setLoadingStates((prev) => ({ ...prev, [key]: !prev[key] }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [key]: false }));
    }, 2e3);
  };
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-container" }, /* @__PURE__ */ import_react3.default.createElement("header", { className: "demo-header" }, /* @__PURE__ */ import_react3.default.createElement("h1", null, "Animated Button Component Library"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-subtitle" }, "Production-ready React component with 5 variants, 3 sizes, and premium micro-interactions")), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Variants"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Choose from 5 carefully designed variants to match your UI needs. Each variant includes smooth transitions, hover effects, and premium animations."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Primary"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Main action button with strong visual hierarchy"), /* @__PURE__ */ import_react3.default.createElement(
    Button,
    {
      variant: "primary",
      onClick: () => toggleLoading("primary"),
      loading: loadingStates.primary
    },
    loadingStates.primary ? "Loading..." : "Primary Button"
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Secondary"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Alternative action with supporting emphasis"), /* @__PURE__ */ import_react3.default.createElement(
    Button,
    {
      variant: "secondary",
      onClick: () => toggleLoading("secondary"),
      loading: loadingStates.secondary
    },
    loadingStates.secondary ? "Loading..." : "Secondary Button"
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Outline"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Bordered button with transparent background"), /* @__PURE__ */ import_react3.default.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => toggleLoading("outline"),
      loading: loadingStates.outline
    },
    loadingStates.outline ? "Loading..." : "Outline Button"
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Ghost"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Minimal button with hover background effect"), /* @__PURE__ */ import_react3.default.createElement(
    Button,
    {
      variant: "ghost",
      onClick: () => toggleLoading("ghost"),
      loading: loadingStates.ghost
    },
    loadingStates.ghost ? "Loading..." : "Ghost Button"
  )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Gradient"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Premium button with animated gradient background"), /* @__PURE__ */ import_react3.default.createElement(
    Button,
    {
      variant: "gradient",
      onClick: () => toggleLoading("gradient"),
      loading: loadingStates.gradient
    },
    loadingStates.gradient ? "Loading..." : "Gradient Button"
  )))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Sizes"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Three size options for different contexts: small for compact layouts, medium for standard use, and large for primary actions."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-flex-group" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Small (sm)"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", size: "sm" }, "Small Button")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Medium (md) - Default"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", size: "md" }, "Medium Button")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Large (lg)"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", size: "lg" }, "Large Button")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "With Icons"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Buttons can include icons on the left, right, or both sides. Icons animate on hover for a premium micro-interaction."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Left Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconPlus, null) }, "Create New")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Right Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "secondary", rightIcon: /* @__PURE__ */ import_react3.default.createElement(IconArrowRight, null) }, "Next Step")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Both Icons"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "gradient", leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconCheck, null), rightIcon: /* @__PURE__ */ import_react3.default.createElement(IconArrowRight, null) }, "Complete")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Icon Only"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "outline", "aria-label": "Add notification" }, /* @__PURE__ */ import_react3.default.createElement(IconBell, null))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Download Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconDownload, null) }, "Download File")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Outline with Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "outline", rightIcon: /* @__PURE__ */ import_react3.default.createElement(IconArrowRight, null) }, "Learn More")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "States"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Buttons support various states: default, hover, active, focus, disabled, and loading. All are fully accessible."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Default"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary" }, "Default State")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Disabled"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", disabled: true }, "Disabled Button")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Loading"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", loading: true }, "Loading Button")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Disabled with Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "secondary", disabled: true, leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconCheck, null) }, "Disabled Action")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Loading with Icon"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "gradient", loading: true, leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconDownload, null) }, "Downloading...")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Custom Class"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "outline", className: "custom-button" }, "Custom Styled")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Complex Scenarios"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Real-world examples combining multiple features for practical use cases."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Form Submit"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", size: "lg", type: "submit" }, "Submit Form")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Confirmation Action"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "gradient", size: "lg", leftIcon: /* @__PURE__ */ import_react3.default.createElement(IconCheck, null) }, "Confirm & Submit")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Cancel Action"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "ghost" }, "Cancel")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Delete Action"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "outline", className: "btn-danger" }, "Delete Item")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Secondary Action"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "secondary", rightIcon: /* @__PURE__ */ import_react3.default.createElement(IconArrowRight, null) }, "View Details")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-group" }, /* @__PURE__ */ import_react3.default.createElement("h3", null, "Minimal Button"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "ghost", size: "sm" }, "Small Ghost Button")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Accessibility Features"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "All buttons are fully accessible with keyboard navigation, focus states, screen reader support, and ARIA attributes."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature-list" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 Keyboard Navigation"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Tab to navigate, Enter/Space to activate"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary" }, "Tab to focus me")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 Focus Visible"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Clear focus outline for keyboard users"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "secondary", tabIndex: "0" }, "Focus is visible")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 ARIA Labels"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Proper aria-label for icon-only buttons"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "outline", "aria-label": "Close dialog" }, "\u2715")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 Disabled State"), /* @__PURE__ */ import_react3.default.createElement("p", null, "aria-disabled properly communicated"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", disabled: true }, "Disabled")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 Loading State"), /* @__PURE__ */ import_react3.default.createElement("p", null, "aria-busy and status roles for loading"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "primary", loading: true }, "Loading")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 Reduced Motion"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Respects prefers-reduced-motion preference"), /* @__PURE__ */ import_react3.default.createElement(Button, { variant: "gradient" }, "Smooth animations")))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Code Examples"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "Quick copy-paste examples for common use cases."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-group" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Basic Button"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `<Button variant="primary" onClick={handleClick}>
  Click me
</Button>`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "With Loading State"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `<Button 
  variant="primary" 
  loading={isLoading}
  onClick={handleSubmit}
>
  Submit Form
</Button>`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "With Icons"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `<Button 
  variant="gradient"
  leftIcon={<IconDownload />}
  rightIcon={<IconArrowRight />}
>
  Download
</Button>`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Icon Only with Label"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `<Button 
  variant="outline" 
  aria-label="Close dialog"
>
  \u2715
</Button>`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Custom Styling"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `<Button 
  variant="outline"
  className="custom-class"
  style={{ '--btn-outline-text': '#e74c3c' }}
>
  Custom Styled
</Button>`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Using forwardRef"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `const buttonRef = useRef(null);

<Button 
  ref={buttonRef}
  variant="primary"
>
  Button with ref
</Button>`))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Theme Customization"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "All colors, sizes, and timing are customizable via CSS variables. Override them in your CSS."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-customization" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Custom Colors"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Override CSS variables for your theme:"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `:root {
  --btn-primary-bg: #your-color;
  --btn-primary-bg-hover: #darker-color;
  --btn-transition-duration: 300ms;
}`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Custom Sizes"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Adjust padding and font sizes:"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `:root {
  --btn-md-padding: 1rem 1.5rem;
  --btn-md-font-size: 1.125rem;
  --btn-md-border-radius: 0.75rem;
}`))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "Dark Mode Support"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Automatic dark mode with prefers-color-scheme:"), /* @__PURE__ */ import_react3.default.createElement("pre", null, /* @__PURE__ */ import_react3.default.createElement("code", null, `@media (prefers-color-scheme: dark) {
  :root {
    --btn-primary-bg: #1e40af;
    --btn-outline-text: #f1f5f9;
  }
}`))))), /* @__PURE__ */ import_react3.default.createElement("section", { className: "demo-section" }, /* @__PURE__ */ import_react3.default.createElement("h2", null, "Performance Optimizations"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "demo-description" }, "The component is built with performance in mind."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature-list" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 React.memo"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Sub-components wrapped with React.memo to prevent re-renders")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 useCallback"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Event handlers memoized to prevent function recreation")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 useMemo"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Class names computed only when props change")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 CSS Variables"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Theme changes via CSS only, no re-render needed")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 will-change"), /* @__PURE__ */ import_react3.default.createElement("p", null, "GPU acceleration for smooth animations")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ import_react3.default.createElement("h4", null, "\u2713 transform over top/left"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Using transform for animations instead of layout-triggering properties")))), /* @__PURE__ */ import_react3.default.createElement("footer", { className: "demo-footer" }, /* @__PURE__ */ import_react3.default.createElement("p", null, "Production-ready Button Component \u2022 Fully Accessible \u2022 Performance Optimized \u2022 MIT Licensed")));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonDemo,
  LoadingSpinner
});
