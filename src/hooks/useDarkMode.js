import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return false;
    
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored) {
      return JSON.parse(stored);
    }
    
    // Check system preference
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    return false;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't explicitly set a preference
      const stored = localStorage.getItem('darkMode');
      if (!stored) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};