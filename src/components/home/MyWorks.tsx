import React, { useEffect, useRef, useState } from "react";
import covidLogo from "../../assets/coronavirus.jpg";
import yad2Logo from "../../assets/yad2.png";
import studentManagmentLogo from "../../assets/student-management-system.png";
import filmsLogo from "../../assets/films.jpg";

const MyWorks = () => {
  const Covid19Photo = useRef(null);
  const Yad2Photo = useRef(null);
  const StudentPhoto = useRef(null);
  const MoviesPhoto = useRef(null);
  const wholeWorks = useRef(null);
  const [covidHover, setCovidHover] = useState(false);
  const [yad2Hover, setYad2Hover] = useState(false);
  const [studentHover, setStudentHover] = useState(false);
  const [moviesHover, setMoviesHover] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (wholeWorks.current != null) {
        wholeWorks.current.style.transform = `translateY(${
          window.scrollY * 0.05
        }px)`;
      }
    });
  });

  useEffect(() => {
    if (window.innerWidth > 500)
      document.addEventListener("mousemove", (e) => {
        if (e != null) {
          const x = e.offsetX - 200;
          const y = e.offsetY - 150;
          if (Covid19Photo.current != null)
            Covid19Photo.current.style.transform = `translate(${x}px, ${y}px)`;
          if (Yad2Photo.current != null)
            Yad2Photo.current.style.transform = `translate(${x}px, ${y}px)`;
          if (StudentPhoto.current != null)
            StudentPhoto.current.style.transform = `translate(${x}px, ${y}px)`;
          if (MoviesPhoto.current != null)
            MoviesPhoto.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
  }, []);

  return (
    <div className="works" ref={wholeWorks}>
      <div
        className="work-covid"
        onMouseOver={() => {
          setCovidHover(true);
        }}
        onMouseLeave={() => {
          setCovidHover(false);
        }}
        onClick={() => {
          window.open(
            "https://github.com/itata222/Covid19_Proj",
            "Covid_WindowName",
            "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
          );
        }}
      >
        <span>Covid 19 Control Panel</span>
        <span className="work-desc">Vanilla</span>
        <img
          className={covidHover ? "showHover" : ""}
          ref={Covid19Photo}
          src={covidLogo}
          alt="Covid19 Site"
        />
      </div>
      <div
        className="work-yad2"
        onMouseOver={() => {
          setYad2Hover(true);
        }}
        onMouseLeave={() => {
          setYad2Hover(false);
        }}
        onClick={() => {
          window.open(
            "https://github.com/itata222/Yad2_Proj-Front",
            "Covid_WindowName",
            "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
          );
        }}
      >
        <span>Yad 2 COPY Site</span>
        <span className="work-desc">Front</span>
        <img
          className={yad2Hover ? "showHover" : ""}
          ref={Yad2Photo}
          src={yad2Logo}
          alt="Yad2 Site"
        />
      </div>
      <div
        className="work-studentManagment"
        onMouseOver={() => {
          setStudentHover(true);
        }}
        onMouseLeave={() => {
          setStudentHover(false);
        }}
        onClick={() => {
          window.open(
            "https://github.com/itata222/StudentManagmentSystem_Proj-Back",
            "Covid_WindowName",
            "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
          );
        }}
      >
        <span>Student Managment Application</span>
        <span className="work-desc">Back</span>
        <img
          className={studentHover ? "showHover" : ""}
          ref={StudentPhoto}
          src={studentManagmentLogo}
          alt="studentManagment Site"
        />
      </div>
      <div
        className="work-films"
        onMouseOver={() => {
          setMoviesHover(true);
        }}
        onMouseLeave={() => {
          setMoviesHover(false);
        }}
        onClick={() => {
          window.open(
            "https://github.com/itata222/Movies_Proj-Front",
            "Covid_WindowName",
            "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
          );
        }}
      >
        <span>Online Movies Site</span>
        <span className="work-desc">Front</span>
        <img
          className={moviesHover ? "showHover" : ""}
          ref={MoviesPhoto}
          src={filmsLogo}
          alt="Films Site"
        />
      </div>
    </div>
  );
};

export default MyWorks;
