// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from "react";
var LoadingSpinner = React.memo(({ size = "md" }) => {
  const spinnerSize = {
    sm: 14,
    md: 16,
    lg: 18
  }[size] || 16;
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(
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
import React3, { useState } from "react";

// src/components/Button/Button.jsx
import React2 from "react";
var Button = () => {
  return /* @__PURE__ */ React2.createElement("div", null, "Button");
};

// src/components/ButtonDemo/ButtonDemo.jsx
var IconArrowRight = () => /* @__PURE__ */ React3.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" }));
var IconDownload = () => /* @__PURE__ */ React3.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React3.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ React3.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" }));
var IconPlus = () => /* @__PURE__ */ React3.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), /* @__PURE__ */ React3.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));
var IconCheck = () => /* @__PURE__ */ React3.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("polyline", { points: "20 6 9 17 4 12" }));
var IconBell = () => /* @__PURE__ */ React3.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }), /* @__PURE__ */ React3.createElement("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }));
function ButtonDemo() {
  const [loadingStates, setLoadingStates] = useState({
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
  return /* @__PURE__ */ React3.createElement("div", { className: "demo-container" }, /* @__PURE__ */ React3.createElement("header", { className: "demo-header" }, /* @__PURE__ */ React3.createElement("h1", null, "Animated Button Component Library"), /* @__PURE__ */ React3.createElement("p", { className: "demo-subtitle" }, "Production-ready React component with 5 variants, 3 sizes, and premium micro-interactions")), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Variants"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Choose from 5 carefully designed variants to match your UI needs. Each variant includes smooth transitions, hover effects, and premium animations."), /* @__PURE__ */ React3.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Primary"), /* @__PURE__ */ React3.createElement("p", null, "Main action button with strong visual hierarchy"), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "primary",
      onClick: () => toggleLoading("primary"),
      loading: loadingStates.primary
    },
    loadingStates.primary ? "Loading..." : "Primary Button"
  )), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Secondary"), /* @__PURE__ */ React3.createElement("p", null, "Alternative action with supporting emphasis"), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "secondary",
      onClick: () => toggleLoading("secondary"),
      loading: loadingStates.secondary
    },
    loadingStates.secondary ? "Loading..." : "Secondary Button"
  )), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Outline"), /* @__PURE__ */ React3.createElement("p", null, "Bordered button with transparent background"), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "outline",
      onClick: () => toggleLoading("outline"),
      loading: loadingStates.outline
    },
    loadingStates.outline ? "Loading..." : "Outline Button"
  )), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Ghost"), /* @__PURE__ */ React3.createElement("p", null, "Minimal button with hover background effect"), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "ghost",
      onClick: () => toggleLoading("ghost"),
      loading: loadingStates.ghost
    },
    loadingStates.ghost ? "Loading..." : "Ghost Button"
  )), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Gradient"), /* @__PURE__ */ React3.createElement("p", null, "Premium button with animated gradient background"), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "gradient",
      onClick: () => toggleLoading("gradient"),
      loading: loadingStates.gradient
    },
    loadingStates.gradient ? "Loading..." : "Gradient Button"
  )))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Sizes"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Three size options for different contexts: small for compact layouts, medium for standard use, and large for primary actions."), /* @__PURE__ */ React3.createElement("div", { className: "demo-flex-group" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Small (sm)"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", size: "sm" }, "Small Button")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Medium (md) - Default"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", size: "md" }, "Medium Button")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Large (lg)"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", size: "lg" }, "Large Button")))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "With Icons"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Buttons can include icons on the left, right, or both sides. Icons animate on hover for a premium micro-interaction."), /* @__PURE__ */ React3.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Left Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", leftIcon: /* @__PURE__ */ React3.createElement(IconPlus, null) }, "Create New")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Right Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "secondary", rightIcon: /* @__PURE__ */ React3.createElement(IconArrowRight, null) }, "Next Step")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Both Icons"), /* @__PURE__ */ React3.createElement(Button, { variant: "gradient", leftIcon: /* @__PURE__ */ React3.createElement(IconCheck, null), rightIcon: /* @__PURE__ */ React3.createElement(IconArrowRight, null) }, "Complete")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Icon Only"), /* @__PURE__ */ React3.createElement(Button, { variant: "outline", "aria-label": "Add notification" }, /* @__PURE__ */ React3.createElement(IconBell, null))), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Download Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", leftIcon: /* @__PURE__ */ React3.createElement(IconDownload, null) }, "Download File")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Outline with Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "outline", rightIcon: /* @__PURE__ */ React3.createElement(IconArrowRight, null) }, "Learn More")))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "States"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Buttons support various states: default, hover, active, focus, disabled, and loading. All are fully accessible."), /* @__PURE__ */ React3.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Default"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary" }, "Default State")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Disabled"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", disabled: true }, "Disabled Button")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Loading"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", loading: true }, "Loading Button")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Disabled with Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "secondary", disabled: true, leftIcon: /* @__PURE__ */ React3.createElement(IconCheck, null) }, "Disabled Action")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Loading with Icon"), /* @__PURE__ */ React3.createElement(Button, { variant: "gradient", loading: true, leftIcon: /* @__PURE__ */ React3.createElement(IconDownload, null) }, "Downloading...")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Custom Class"), /* @__PURE__ */ React3.createElement(Button, { variant: "outline", className: "custom-button" }, "Custom Styled")))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Complex Scenarios"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Real-world examples combining multiple features for practical use cases."), /* @__PURE__ */ React3.createElement("div", { className: "demo-grid" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Form Submit"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", size: "lg", type: "submit" }, "Submit Form")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Confirmation Action"), /* @__PURE__ */ React3.createElement(Button, { variant: "gradient", size: "lg", leftIcon: /* @__PURE__ */ React3.createElement(IconCheck, null) }, "Confirm & Submit")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Cancel Action"), /* @__PURE__ */ React3.createElement(Button, { variant: "ghost" }, "Cancel")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Delete Action"), /* @__PURE__ */ React3.createElement(Button, { variant: "outline", className: "btn-danger" }, "Delete Item")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Secondary Action"), /* @__PURE__ */ React3.createElement(Button, { variant: "secondary", rightIcon: /* @__PURE__ */ React3.createElement(IconArrowRight, null) }, "View Details")), /* @__PURE__ */ React3.createElement("div", { className: "demo-group" }, /* @__PURE__ */ React3.createElement("h3", null, "Minimal Button"), /* @__PURE__ */ React3.createElement(Button, { variant: "ghost", size: "sm" }, "Small Ghost Button")))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Accessibility Features"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "All buttons are fully accessible with keyboard navigation, focus states, screen reader support, and ARIA attributes."), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature-list" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 Keyboard Navigation"), /* @__PURE__ */ React3.createElement("p", null, "Tab to navigate, Enter/Space to activate"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary" }, "Tab to focus me")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 Focus Visible"), /* @__PURE__ */ React3.createElement("p", null, "Clear focus outline for keyboard users"), /* @__PURE__ */ React3.createElement(Button, { variant: "secondary", tabIndex: "0" }, "Focus is visible")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 ARIA Labels"), /* @__PURE__ */ React3.createElement("p", null, "Proper aria-label for icon-only buttons"), /* @__PURE__ */ React3.createElement(Button, { variant: "outline", "aria-label": "Close dialog" }, "\u2715")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 Disabled State"), /* @__PURE__ */ React3.createElement("p", null, "aria-disabled properly communicated"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", disabled: true }, "Disabled")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 Loading State"), /* @__PURE__ */ React3.createElement("p", null, "aria-busy and status roles for loading"), /* @__PURE__ */ React3.createElement(Button, { variant: "primary", loading: true }, "Loading")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 Reduced Motion"), /* @__PURE__ */ React3.createElement("p", null, "Respects prefers-reduced-motion preference"), /* @__PURE__ */ React3.createElement(Button, { variant: "gradient" }, "Smooth animations")))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Code Examples"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "Quick copy-paste examples for common use cases."), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-group" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "Basic Button"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `<Button variant="primary" onClick={handleClick}>
  Click me
</Button>`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "With Loading State"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `<Button 
  variant="primary" 
  loading={isLoading}
  onClick={handleSubmit}
>
  Submit Form
</Button>`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "With Icons"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `<Button 
  variant="gradient"
  leftIcon={<IconDownload />}
  rightIcon={<IconArrowRight />}
>
  Download
</Button>`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "Icon Only with Label"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `<Button 
  variant="outline" 
  aria-label="Close dialog"
>
  \u2715
</Button>`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "Custom Styling"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `<Button 
  variant="outline"
  className="custom-class"
  style={{ '--btn-outline-text': '#e74c3c' }}
>
  Custom Styled
</Button>`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-code-block" }, /* @__PURE__ */ React3.createElement("h4", null, "Using forwardRef"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `const buttonRef = useRef(null);

<Button 
  ref={buttonRef}
  variant="primary"
>
  Button with ref
</Button>`))))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Theme Customization"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "All colors, sizes, and timing are customizable via CSS variables. Override them in your CSS."), /* @__PURE__ */ React3.createElement("div", { className: "demo-customization" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ React3.createElement("h4", null, "Custom Colors"), /* @__PURE__ */ React3.createElement("p", null, "Override CSS variables for your theme:"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `:root {
  --btn-primary-bg: #your-color;
  --btn-primary-bg-hover: #darker-color;
  --btn-transition-duration: 300ms;
}`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ React3.createElement("h4", null, "Custom Sizes"), /* @__PURE__ */ React3.createElement("p", null, "Adjust padding and font sizes:"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `:root {
  --btn-md-padding: 1rem 1.5rem;
  --btn-md-font-size: 1.125rem;
  --btn-md-border-radius: 0.75rem;
}`))), /* @__PURE__ */ React3.createElement("div", { className: "demo-custom-example" }, /* @__PURE__ */ React3.createElement("h4", null, "Dark Mode Support"), /* @__PURE__ */ React3.createElement("p", null, "Automatic dark mode with prefers-color-scheme:"), /* @__PURE__ */ React3.createElement("pre", null, /* @__PURE__ */ React3.createElement("code", null, `@media (prefers-color-scheme: dark) {
  :root {
    --btn-primary-bg: #1e40af;
    --btn-outline-text: #f1f5f9;
  }
}`))))), /* @__PURE__ */ React3.createElement("section", { className: "demo-section" }, /* @__PURE__ */ React3.createElement("h2", null, "Performance Optimizations"), /* @__PURE__ */ React3.createElement("p", { className: "demo-description" }, "The component is built with performance in mind."), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature-list" }, /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 React.memo"), /* @__PURE__ */ React3.createElement("p", null, "Sub-components wrapped with React.memo to prevent re-renders")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 useCallback"), /* @__PURE__ */ React3.createElement("p", null, "Event handlers memoized to prevent function recreation")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 useMemo"), /* @__PURE__ */ React3.createElement("p", null, "Class names computed only when props change")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 CSS Variables"), /* @__PURE__ */ React3.createElement("p", null, "Theme changes via CSS only, no re-render needed")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 will-change"), /* @__PURE__ */ React3.createElement("p", null, "GPU acceleration for smooth animations")), /* @__PURE__ */ React3.createElement("div", { className: "demo-feature" }, /* @__PURE__ */ React3.createElement("h4", null, "\u2713 transform over top/left"), /* @__PURE__ */ React3.createElement("p", null, "Using transform for animations instead of layout-triggering properties")))), /* @__PURE__ */ React3.createElement("footer", { className: "demo-footer" }, /* @__PURE__ */ React3.createElement("p", null, "Production-ready Button Component \u2022 Fully Accessible \u2022 Performance Optimized \u2022 MIT Licensed")));
}
export {
  ButtonDemo,
  LoadingSpinner
};
