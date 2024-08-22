import React, { useEffect, useRef } from "react";

const ScrollBar = () => {
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBarRef.current) {
        scrollBarRef.current.style.transform = `translateY(${window.scrollY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollBar">
      <span ref={scrollBarRef} className="scrollBar-content"></span>
    </div>
  );
};

export default ScrollBar;
