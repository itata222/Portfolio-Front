import React, { useRef, useState } from "react";

interface IWorkItem {
  title: string;
  description: string;
  logo: string;
  link: string;
  isMobile: boolean;
}

const WorkItem: React.FC<IWorkItem> = ({
  title,
  description,
  logo,
  link,
  isMobile,
}) => {
  const photoRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile && photoRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      const x =
        e.clientX - containerRect.left - photoRef.current.offsetWidth / 2;
      const y =
        e.clientY - containerRect.top - photoRef.current.offsetHeight / 2;

      photoRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div
      className={`work-${title.toLowerCase().replace(/\s/g, "")}`}
      ref={containerRef}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(link, "_blank")}
      onMouseMove={handleMouseMove}
    >
      <span>{title}</span>
      <span className="work-desc">{description}</span>
      <img
        className={!isMobile && hover ? "showHover" : "dont-show"}
        ref={photoRef}
        src={logo}
        alt={`${title} Site`}
      />
    </div>
  );
};

export default WorkItem;
