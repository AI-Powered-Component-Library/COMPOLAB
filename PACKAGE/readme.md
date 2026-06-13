## Installation

Install CompoLab using npm:

```bash
npm install compolab
```

---

## Requirements

- React 18 or higher
- React is a peer dependency and must be installed in your project

---

## Getting Started

Import components directly from the package.

Currently available components:

- `LoadingSpinner`
- `ButtonDemo`

---

## LoadingSpinner

A lightweight animated spinner designed for loading states.

### Example

```jsx
import { LoadingSpinner } from "compolab";

function App() {
  return (
    <div>
      <p>Please wait...</p>
      <LoadingSpinner size="md" />
    </div>
  );
}

export default App;
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `"sm" | "md" | "lg"` | `"md"` | Controls the spinner size |

---

## ButtonDemo

A demonstration component that showcases different button styles, variants, sizes, and states.

### Example

```jsx
import { ButtonDemo } from "compolab";

function Demo() {
  return (
    <div>
      <ButtonDemo />
    </div>
  );
}

export default Demo;
```

---

## Features

### Performance Optimized

Components such as `LoadingSpinner` use `React.memo` to minimize unnecessary re-renders.

### Accessibility First

Designed with accessibility best practices to provide an inclusive user experience.

---

## Exported Components

```jsx
import {
  LoadingSpinner,
  ButtonDemo
} from "compolab";
```

---

## License

MIT License