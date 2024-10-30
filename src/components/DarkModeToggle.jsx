'use client';

import { useEffect } from 'react';
import Darkmode from 'darkmode-js';

const DarkModeToggle = () => {
  useEffect(() => {
    const darkmode = new Darkmode({
      top: '10px',
      left: 'unset',
      right: '10px',
      time: '0.5s',
      label: '🌓',
      autoMatchOsTheme: true,
    });
    darkmode.showWidget();

    // Add CSS override to ignore dark mode for certain elements
    const style = document.createElement('style');
    style.innerHTML = `
      body.darkmode--activated .copyright-dark-mode {
        color: black !important;
      }
      .darkmode-toggle, .darkmode-layer, .darkmode-layer--button {
        bottom: unset;
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style tag on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default DarkModeToggle;
