import React, { useState, useEffect, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false); // For non-text interactive elements
  const [isOverTextInput, setIsOverTextInput] = useState(false); // Specifically for text inputs
  const [isVisible, setIsVisible] = useState(false);

  const textInputSelectors = 'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], input[type="number"], textarea';
  const interactiveSelectors = 'a, button, input[type="button"], input[type="submit"], [data-interactive="true"]';

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) {
      setTimeout(() => setIsVisible(true), 100);
    }
    // Check if current target is a text input
    if (e.target.matches && e.target.matches(textInputSelectors)) {
      setIsOverTextInput(true);
      document.body.style.cursor = 'text'; // Show text cursor on body
    } else {
      setIsOverTextInput(false);
      document.body.style.cursor = 'none'; // Hide default cursor on body
    }
  }, [isVisible, textInputSelectors]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = ''; // Restore default cursor on unmount
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const elementsToWatch = document.querySelectorAll(`${interactiveSelectors}, ${textInputSelectors}`);

    const handleMouseEnter = (e) => {
      if (e.target.matches(textInputSelectors)) {
        setIsOverTextInput(true);
        e.target.style.cursor = 'text'; // Ensure text cursor on the element itself
      } else if (e.target.matches(interactiveSelectors)) {
        setIsHoveringInteractive(true);
        e.target.style.cursor = 'none'; // Hide default cursor on interactive elements
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches(textInputSelectors)) {
        setIsOverTextInput(false); // This might fight with mousemove, let mousemove be master
      } else if (e.target.matches(interactiveSelectors)) {
        setIsHoveringInteractive(false);
      }
      // Don't reset e.target.style.cursor here, let mousemove handle body cursor
    };

    elementsToWatch.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      // Initial cursor style based on type
      if (el.matches(textInputSelectors)) {
        el.style.cursor = 'text';
      } else {
        el.style.cursor = 'none';
      }
    });

    return () => {
      elementsToWatch.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.style.cursor = ''; // Restore cursor on elements
      });
    };
  }, [isVisible, interactiveSelectors, textInputSelectors]); // Rerun if isVisible changes to catch new elements (simplistic)

  const showCustomCursor = isVisible && !isOverTextInput;

  const cursorBaseStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: showCustomCursor ? 1 : 0,
    // Ensure all transitions are defined in the CSS for these properties
    // transition: 'opacity 0.1s ease-out, transform 0.1s ease-out, width 0.2s ease-in-out, height 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  };

  return (
    // Apply 'custom-cursor-hovered' only if it's an interactive element AND not a text input
    <div className={`custom-cursor-wrapper ${isHoveringInteractive && !isOverTextInput ? 'custom-cursor-hovered' : ''}`}>
      <div
        className="custom-cursor-outer"
        style={cursorBaseStyle}
      />
      <div
        className="custom-cursor-inner"
        style={cursorBaseStyle} // Inner dot also respects opacity and position
      />
    </div>
  );
};

export default CustomCursor;
