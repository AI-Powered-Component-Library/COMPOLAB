import React from 'react';
import './LoadingSpinner.css';

/**
 * LoadingSpinner Component
 * Animated spinner displayed in button loading state
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const LoadingSpinner = React.memo(({ size = 'md' }) => {
  const spinnerSize = {
    sm: 14,
    md: 16,
    lg: 18,
  }[size] || 16;

  return (
    <svg
      className="spinner"
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="15.7 62.8"
        strokeLinecap="round"
        className="spinner-track"
      />
    </svg>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';