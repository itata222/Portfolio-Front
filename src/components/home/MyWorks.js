import React, { useEffect, useRef,useState } from 'react';
import covidLogo from '../../images/coronavirus.jpg'
import yad2Logo from '../../images/yad2.png'
import studentManagmentLogo from '../../images/student-management-system.png'
import filmsLogo from '../../images/films.jpg'


const MyWorks = () => {
    const Covid19Photo=useRef(null);
    const Yad2PhotoFront=useRef(null);
    const Yad2PhotoBack=useRef(null);
    const StudentPhotoFront=useRef(null);
    const StudentPhotoBack=useRef(null);
    const MoviesPhotoFront=useRef(null);
    const MoviesPhotoBack=useRef(null);
    const wholeWorks = useRef(null);
    const [covidHover, setCovidHover] = useState(false)
    const [yad2FHover, setyad2FHover] = useState(false)
    const [yad2BHover, setyad2BHover] = useState(false)
    const [studentFHover, setstudentFHover] = useState(false)
    const [studentBHover, setstudentBHover] = useState(false)
    const [moviesFHover, setmoviesFHover] = useState(false)
    const [moviesBHover, setmoviesBHover] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", function(e){
            if(wholeWorks.current!=null){
                wholeWorks.current.style.transform=`translateY(${window.scrollY * 0.05}px)`
            }
        })
    });


    useEffect(()=>{
        document.addEventListener('mousemove',(e)=>{
            if(e!=null){
                const x=e.offsetX-200;
                const y=e.offsetY-150;
                Covid19Photo.current.style.transform=`translate(${x}px, ${y}px)`;
                Yad2PhotoFront.current.style.transform=`translate(${x}px, ${y}px)`;
                Yad2PhotoBack.current.style.transform=`translate(${x}px, ${y}px)`;
                StudentPhotoFront.current.style.transform=`translate(${x}px, ${y}px)`;
                StudentPhotoBack.current.style.transform=`translate(${x}px, ${y}px)`;
                MoviesPhotoFront.current.style.transform=`translate(${x}px, ${y}px)`;
                MoviesPhotoBack.current.style.transform=`translate(${x}px, ${y}px)`;
            }
        })    
    },[])
    
    return (
        <div className="works" ref={wholeWorks}> 
            <div className="work-covid"
            onMouseOver={()=>{setCovidHover(true)}}
            onMouseLeave={()=>{setCovidHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/Covid19_Proj',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Covid 19 Control Panel</span>
                <span className="work-desc">Vanilla</span>
                <img className={covidHover?"showHover":""}  ref={Covid19Photo} src={covidLogo} alt="Covid19 Site"/>
            </div>
            <div className="work-yad2" 
            onMouseOver={()=>{setyad2BHover(true)}}
            onMouseLeave={()=>{setyad2BHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/Yad2_Proj-Back',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Yad 2 COPY Site</span>
                <span className="work-desc">Back</span>
                <img  className={yad2BHover?"showHover":""} ref={Yad2PhotoBack} src={yad2Logo} alt="Yad2 Site" />
            </div>
            <div className="work-yad2" 
            onMouseOver={()=>{setyad2FHover(true)}}
            onMouseLeave={()=>{setyad2FHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/Yad2_Proj-Front',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Yad 2 COPY Site</span>
                <span className="work-desc">Front</span>
                <img className={yad2FHover?"showHover":""} ref={Yad2PhotoFront} src={yad2Logo} alt="Yad2 Site" />
            </div>
            <div className="work-studentManagment" 
            onMouseOver={()=>{setstudentBHover(true)}}
            onMouseLeave={()=>{setstudentBHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/StudentManagmentSystem_Proj-Back',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Student Managment Application</span>
                <span className="work-desc">Back</span>
                <img className={studentBHover?"showHover":""} ref={StudentPhotoBack} src={studentManagmentLogo} alt="studentManagment Site" />
            </div>
            <div className="work-studentManagment" 
            onMouseOver={()=>{setstudentFHover(true)}}
            onMouseLeave={()=>{setstudentFHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/StudentManagmentSystem_Proj-Front',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Student Managment Application</span>
                <span className="work-desc">Front</span>
                <img className={studentFHover?"showHover":""} ref={StudentPhotoFront} src={studentManagmentLogo} alt="studentManagment Site" />
            </div>
            <div className="work-films" 
            onMouseOver={()=>{setmoviesBHover(true)}}
            onMouseLeave={()=>{setmoviesBHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/Movies_Proj-Back',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Online Movies Site</span>
                <span className="work-desc">Back</span>
                <img className={moviesBHover?"showHover":""} ref={MoviesPhotoBack} src={filmsLogo} alt="Films Site" />
            </div>
            <div className="work-films" 
            onMouseOver={()=>{setmoviesFHover(true)}}
            onMouseLeave={()=>{setmoviesFHover(false)}} onClick={()=>{
                window.open('https://github.com/itata222/Movies_Proj-Front',
                "Covid_WindowName",
                "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
            }}>
                <span>Online Movies Site</span>
                <span className="work-desc">Front</span>
                <img className={moviesFHover?"showHover":""} ref={MoviesPhotoFront} src={filmsLogo} alt="Films Site" />
            </div>
        </div>
    )
}

export default MyWorks
