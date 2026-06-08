import React, { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import './ButtonDemo.css';

/**
 * Icon Components (Example SVG Icons)
 * In production, use a proper icon library like react-icons or your own SVG components
 */
const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

/**
 * ButtonDemo Component
 * Showcases all variants, sizes, and features of the Button component
 */
export function ButtonDemo() {
  const [loadingStates, setLoadingStates] = useState({
    primary: false,
    secondary: false,
    outline: false,
    ghost: false,
    gradient: false,
  });

  const toggleLoading = (key) => {
    setLoadingStates((prev) => ({ ...prev, [key]: !prev[key] }));

    // Auto-reset loading after 2 seconds for demo purposes
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>Animated Button Component Library</h1>
        <p className="demo-subtitle">Production-ready React component with 5 variants, 3 sizes, and premium micro-interactions</p>
      </header>

      {/* Section: Variants */}
      <section className="demo-section">
        <h2>Variants</h2>
        <p className="demo-description">
          Choose from 5 carefully designed variants to match your UI needs. Each variant includes smooth transitions, hover effects, and premium animations.
        </p>

        <div className="demo-grid">
          {/* Primary */}
          <div className="demo-group">
            <h3>Primary</h3>
            <p>Main action button with strong visual hierarchy</p>
            <Button
              variant="primary"
              onClick={() => toggleLoading('primary')}
              loading={loadingStates.primary}
            >
              {loadingStates.primary ? 'Loading...' : 'Primary Button'}
            </Button>
          </div>

          {/* Secondary */}
          <div className="demo-group">
            <h3>Secondary</h3>
            <p>Alternative action with supporting emphasis</p>
            <Button
              variant="secondary"
              onClick={() => toggleLoading('secondary')}
              loading={loadingStates.secondary}
            >
              {loadingStates.secondary ? 'Loading...' : 'Secondary Button'}
            </Button>
          </div>

          {/* Outline */}
          <div className="demo-group">
            <h3>Outline</h3>
            <p>Bordered button with transparent background</p>
            <Button
              variant="outline"
              onClick={() => toggleLoading('outline')}
              loading={loadingStates.outline}
            >
              {loadingStates.outline ? 'Loading...' : 'Outline Button'}
            </Button>
          </div>

          {/* Ghost */}
          <div className="demo-group">
            <h3>Ghost</h3>
            <p>Minimal button with hover background effect</p>
            <Button
              variant="ghost"
              onClick={() => toggleLoading('ghost')}
              loading={loadingStates.ghost}
            >
              {loadingStates.ghost ? 'Loading...' : 'Ghost Button'}
            </Button>
          </div>

          {/* Gradient */}
          <div className="demo-group">
            <h3>Gradient</h3>
            <p>Premium button with animated gradient background</p>
            <Button
              variant="gradient"
              onClick={() => toggleLoading('gradient')}
              loading={loadingStates.gradient}
            >
              {loadingStates.gradient ? 'Loading...' : 'Gradient Button'}
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Sizes */}
      <section className="demo-section">
        <h2>Sizes</h2>
        <p className="demo-description">
          Three size options for different contexts: small for compact layouts, medium for standard use, and large for primary actions.
        </p>

        <div className="demo-flex-group">
          <div className="demo-group">
            <h3>Small (sm)</h3>
            <Button variant="primary" size="sm">Small Button</Button>
          </div>

          <div className="demo-group">
            <h3>Medium (md) - Default</h3>
            <Button variant="primary" size="md">Medium Button</Button>
          </div>

          <div className="demo-group">
            <h3>Large (lg)</h3>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
        </div>
      </section>

      {/* Section: With Icons */}
      <section className="demo-section">
        <h2>With Icons</h2>
        <p className="demo-description">
          Buttons can include icons on the left, right, or both sides. Icons animate on hover for a premium micro-interaction.
        </p>

        <div className="demo-grid">
          <div className="demo-group">
            <h3>Left Icon</h3>
            <Button variant="primary" leftIcon={<IconPlus />}>
              Create New
            </Button>
          </div>

          <div className="demo-group">
            <h3>Right Icon</h3>
            <Button variant="secondary" rightIcon={<IconArrowRight />}>
              Next Step
            </Button>
          </div>

          <div className="demo-group">
            <h3>Both Icons</h3>
            <Button variant="gradient" leftIcon={<IconCheck />} rightIcon={<IconArrowRight />}>
              Complete
            </Button>
          </div>

          <div className="demo-group">
            <h3>Icon Only</h3>
            <Button variant="outline" aria-label="Add notification">
              <IconBell />
            </Button>
          </div>

          <div className="demo-group">
            <h3>Download Icon</h3>
            <Button variant="primary" leftIcon={<IconDownload />}>
              Download File
            </Button>
          </div>

          <div className="demo-group">
            <h3>Outline with Icon</h3>
            <Button variant="outline" rightIcon={<IconArrowRight />}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Section: States */}
      <section className="demo-section">
        <h2>States</h2>
        <p className="demo-description">
          Buttons support various states: default, hover, active, focus, disabled, and loading. All are fully accessible.
        </p>

        <div className="demo-grid">
          <div className="demo-group">
            <h3>Default</h3>
            <Button variant="primary">Default State</Button>
          </div>

          <div className="demo-group">
            <h3>Disabled</h3>
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
          </div>

          <div className="demo-group">
            <h3>Loading</h3>
            <Button variant="primary" loading>
              Loading Button
            </Button>
          </div>

          <div className="demo-group">
            <h3>Disabled with Icon</h3>
            <Button variant="secondary" disabled leftIcon={<IconCheck />}>
              Disabled Action
            </Button>
          </div>

          <div className="demo-group">
            <h3>Loading with Icon</h3>
            <Button variant="gradient" loading leftIcon={<IconDownload />}>
              Downloading...
            </Button>
          </div>

          <div className="demo-group">
            <h3>Custom Class</h3>
            <Button variant="outline" className="custom-button">
              Custom Styled
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Complex Scenarios */}
      <section className="demo-section">
        <h2>Complex Scenarios</h2>
        <p className="demo-description">
          Real-world examples combining multiple features for practical use cases.
        </p>

        <div className="demo-grid">
          <div className="demo-group">
            <h3>Form Submit</h3>
            <Button variant="primary" size="lg" type="submit">
              Submit Form
            </Button>
          </div>

          <div className="demo-group">
            <h3>Confirmation Action</h3>
            <Button variant="gradient" size="lg" leftIcon={<IconCheck />}>
              Confirm & Submit
            </Button>
          </div>

          <div className="demo-group">
            <h3>Cancel Action</h3>
            <Button variant="ghost">
              Cancel
            </Button>
          </div>

          <div className="demo-group">
            <h3>Delete Action</h3>
            <Button variant="outline" className="btn-danger">
              Delete Item
            </Button>
          </div>

          <div className="demo-group">
            <h3>Secondary Action</h3>
            <Button variant="secondary" rightIcon={<IconArrowRight />}>
              View Details
            </Button>
          </div>

          <div className="demo-group">
            <h3>Minimal Button</h3>
            <Button variant="ghost" size="sm">
              Small Ghost Button
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Accessibility */}
      <section className="demo-section">
        <h2>Accessibility Features</h2>
        <p className="demo-description">
          All buttons are fully accessible with keyboard navigation, focus states, screen reader support, and ARIA attributes.
        </p>

        <div className="demo-feature-list">
          <div className="demo-feature">
            <h4>✓ Keyboard Navigation</h4>
            <p>Tab to navigate, Enter/Space to activate</p>
            <Button variant="primary">Tab to focus me</Button>
          </div>

          <div className="demo-feature">
            <h4>✓ Focus Visible</h4>
            <p>Clear focus outline for keyboard users</p>
            <Button variant="secondary" tabIndex="0">Focus is visible</Button>
          </div>

          <div className="demo-feature">
            <h4>✓ ARIA Labels</h4>
            <p>Proper aria-label for icon-only buttons</p>
            <Button variant="outline" aria-label="Close dialog">
              ✕
            </Button>
          </div>

          <div className="demo-feature">
            <h4>✓ Disabled State</h4>
            <p>aria-disabled properly communicated</p>
            <Button variant="primary" disabled>Disabled</Button>
          </div>

          <div className="demo-feature">
            <h4>✓ Loading State</h4>
            <p>aria-busy and status roles for loading</p>
            <Button variant="primary" loading>Loading</Button>
          </div>

          <div className="demo-feature">
            <h4>✓ Reduced Motion</h4>
            <p>Respects prefers-reduced-motion preference</p>
            <Button variant="gradient">Smooth animations</Button>
          </div>
        </div>
      </section>

      {/* Section: Usage Examples */}
      <section className="demo-section">
        <h2>Code Examples</h2>
        <p className="demo-description">
          Quick copy-paste examples for common use cases.
        </p>

        <div className="demo-code-group">
          <div className="demo-code-block">
            <h4>Basic Button</h4>
            <pre><code>{`<Button variant="primary" onClick={handleClick}>
  Click me
</Button>`}</code></pre>
          </div>

          <div className="demo-code-block">
            <h4>With Loading State</h4>
            <pre><code>{`<Button 
  variant="primary" 
  loading={isLoading}
  onClick={handleSubmit}
>
  Submit Form
</Button>`}</code></pre>
          </div>

          <div className="demo-code-block">
            <h4>With Icons</h4>
            <pre><code>{`<Button 
  variant="gradient"
  leftIcon={<IconDownload />}
  rightIcon={<IconArrowRight />}
>
  Download
</Button>`}</code></pre>
          </div>

          <div className="demo-code-block">
            <h4>Icon Only with Label</h4>
            <pre><code>{`<Button 
  variant="outline" 
  aria-label="Close dialog"
>
  ✕
</Button>`}</code></pre>
          </div>

          <div className="demo-code-block">
            <h4>Custom Styling</h4>
            <pre><code>{`<Button 
  variant="outline"
  className="custom-class"
  style={{ '--btn-outline-text': '#e74c3c' }}
>
  Custom Styled
</Button>`}</code></pre>
          </div>

          <div className="demo-code-block">
            <h4>Using forwardRef</h4>
            <pre><code>{`const buttonRef = useRef(null);

<Button 
  ref={buttonRef}
  variant="primary"
>
  Button with ref
</Button>`}</code></pre>
          </div>
        </div>
      </section>

      {/* Section: Customization */}
      <section className="demo-section">
        <h2>Theme Customization</h2>
        <p className="demo-description">
          All colors, sizes, and timing are customizable via CSS variables. Override them in your CSS.
        </p>

        <div className="demo-customization">
          <div className="demo-custom-example">
            <h4>Custom Colors</h4>
            <p>Override CSS variables for your theme:</p>
            <pre><code>{`:root {
  --btn-primary-bg: #your-color;
  --btn-primary-bg-hover: #darker-color;
  --btn-transition-duration: 300ms;
}`}</code></pre>
          </div>

          <div className="demo-custom-example">
            <h4>Custom Sizes</h4>
            <p>Adjust padding and font sizes:</p>
            <pre><code>{`:root {
  --btn-md-padding: 1rem 1.5rem;
  --btn-md-font-size: 1.125rem;
  --btn-md-border-radius: 0.75rem;
}`}</code></pre>
          </div>

          <div className="demo-custom-example">
            <h4>Dark Mode Support</h4>
            <p>Automatic dark mode with prefers-color-scheme:</p>
            <pre><code>{`@media (prefers-color-scheme: dark) {
  :root {
    --btn-primary-bg: #1e40af;
    --btn-outline-text: #f1f5f9;
  }
}`}</code></pre>
          </div>
        </div>
      </section>

      {/* Section: Performance */}
      <section className="demo-section">
        <h2>Performance Optimizations</h2>
        <p className="demo-description">
          The component is built with performance in mind.
        </p>

        <div className="demo-feature-list">
          <div className="demo-feature">
            <h4>✓ React.memo</h4>
            <p>Sub-components wrapped with React.memo to prevent re-renders</p>
          </div>

          <div className="demo-feature">
            <h4>✓ useCallback</h4>
            <p>Event handlers memoized to prevent function recreation</p>
          </div>

          <div className="demo-feature">
            <h4>✓ useMemo</h4>
            <p>Class names computed only when props change</p>
          </div>

          <div className="demo-feature">
            <h4>✓ CSS Variables</h4>
            <p>Theme changes via CSS only, no re-render needed</p>
          </div>

          <div className="demo-feature">
            <h4>✓ will-change</h4>
            <p>GPU acceleration for smooth animations</p>
          </div>

          <div className="demo-feature">
            <h4>✓ transform over top/left</h4>
            <p>Using transform for animations instead of layout-triggering properties</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="demo-footer">
        <p>
          Production-ready Button Component • Fully Accessible • Performance Optimized • MIT Licensed
        </p>
      </footer>
    </div>
  );
}
