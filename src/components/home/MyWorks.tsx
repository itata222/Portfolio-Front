import React, { useEffect, useRef } from "react";
import covidLogo from "../../assets/coronavirus.jpg";
import yad2Logo from "../../assets/yad2.png";
import studentManagmentLogo from "../../assets/student-management-system.png";
import filmsLogo from "../../assets/films.jpg";
import { useDeviceData } from "../../customHooks/deviceDataHook";
import WorkItem from "./WorkItem";

const MyWorks = () => {
  const wholeWorks = useRef(null);
  const { isMobile } = useDeviceData();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (wholeWorks.current) {
        wholeWorks.current.style.transform = `translateY(${
          window.scrollY * 0.05
        }px)`;
      }
    });
  }, []);

  const works = [
    {
      title: "Covid 19 Control Panel",
      description: "Vanilla",
      logo: covidLogo,
      link: "https://github.com/itata222/Covid19_Proj",
    },
    {
      title: "Yad 2 COPY Site",
      description: "Front",
      logo: yad2Logo,
      link: "https://github.com/itata222/Yad2_Proj-Front",
    },
    {
      title: "Student Management Application",
      description: "Back",
      logo: studentManagmentLogo,
      link: "https://github.com/itata222/StudentManagmentSystem_Proj-Back",
    },
    {
      title: "Online Movies Site",
      description: "Front",
      logo: filmsLogo,
      link: "https://github.com/itata222/Movies_Proj-Front",
    },
  ];

  return (
    <div className="works" ref={wholeWorks}>
      {works.map((work, index) => (
        <WorkItem
          key={index}
          title={work.title}
          description={work.description}
          logo={work.logo}
          link={work.link}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default MyWorks;
