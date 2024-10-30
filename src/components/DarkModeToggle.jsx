'use client';

import { useEffect } from 'react';
import Darkmode from 'darkmode-js';

const DarkModeToggle = () => {
  useEffect(() => {
    const darkmode = new Darkmode({
      top: '10px',
      left: 'unset',
      time: '0s',
      label: '🌓',
      autoMatchOsTheme: true,
    });
    darkmode.showWidget();

    // Add CSS override to ignore dark mode for certain elements
    const style = document.createElement('style');
    style.innerHTML = `
      body.darkmode--activated {
        background-color: black !important;
      }
      body.darkmode--activated .response-dark-mode {
        color: darkcyan !important;
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
