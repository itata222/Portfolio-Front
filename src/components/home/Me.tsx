import React, { useEffect, useRef, useState } from "react";

const Me = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const myMe1 = useRef(null);
  const myMe2 = useRef(null);
  const myMe3 = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      myMe3.current.style.transformOrigin = "center";
      if (st > lastScrollTop) {
        myMe3.current.style.transform = `scale(${Math.min(
          window.scrollY * 0.005 + 1,
          2
        )}) skew(5deg) rotateZ(5deg)`;
      } else {
        myMe3.current.style.transform = `scale(${Math.min(
          window.scrollY * 0.005 + 1,
          2
        )}) skew(-5deg) rotateZ(-5deg)`;
      }

      if (myMe1.current != null) {
        myMe1.current.style.transform = `translateY(-${
          window.scrollY * 0.15
        }px)`;
      }
      if (myMe2.current != null) {
        myMe2.current.style.transform = `translateY(-${
          window.scrollY * 0.25
        }px)`;
      }

      setLastScrollTop(st <= 0 ? 0 : st);
    });
  });

  return (
    <div className="me">
      <h1>
        <span ref={myMe1} className="meTitle">
          Hi! I'm
        </span>
        <span ref={myMe2} className="meTitle">
          Itamar
        </span>
      </h1>
      <span ref={myMe3}>Welcome to my online space.</span>
    </div>
  );
};

export default Me;
