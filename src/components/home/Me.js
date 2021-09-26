import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype'

const Me = () => {
    let lastScrollTop = 0;
    const myText = useRef(null);
    const myMe1 = useRef(null);
    const myMe2 = useRef(null);
    const myMe3 = useRef(null);
    const myArrow=useRef(null)

    useEffect(() => {
        new CircleType(myText.current).radius(65)
        window.addEventListener("scroll", function(e){
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                myMe3.current.style.transform=`translateY(${window.scrollY * 0.15}px) translateX(-${window.scrollY * 0.5}px) scale(${window.scrollY * 0.005+1}) skew(5deg) rotateZ(5deg) `
            } else {
                myMe3.current.style.transform=`translateY(${window.scrollY * 0.15}px) translateX(-${window.scrollY * 0.5}px) scale(${window.scrollY * 0.005+1}) skew(-5deg) rotateZ(-5deg)`
            }
            if(myText.current!=null){
                myText.current.style.transform=`rotate(${window.scrollY * 0.15}deg)`
            }
            if(myMe1.current!=null){
                myMe1.current.style.transform=`translateY(-${window.scrollY * 0.15}px)`
            }
            if(myMe2.current!=null){
                myMe2.current.style.transform=`translateY(-${window.scrollY * 0.25}px)`
            }
            if(myArrow.current!=null){
                myArrow.current.style.opacity=`${1-window.scrollY * 0.001}`
            }
            lastScrollTop = st <= 0 ? 0 : st;
        })
    });


    return (
        <div className="me">
            <h1>
                <span ref={myMe1} className="meTitle">Hi! I'm</span>
                <span ref={myMe2} className="meTitle">Itamar</span>
                <div className="circular-text">
                    <p ref={myText} className="text">Full • Stack • Developer </p>
                    <div ref={myArrow} className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.568 512.568" style={{enableBackground: "new 0 0 512.568 512.568"}} xmlSpace="preserve" width="512" height="512">
                            <path d="M184.284,235.284h140v40h-140V235.284z M275.284,436V315.284h-40V436l-53.858-53.858l-28.284,28.285l102.142,102.142  l105.142-105.142l-28.284-28.285L275.284,436z M235.284,76.568v118.716h40V76.568l56.858,56.858l28.284-28.284L255.284,0  L152.142,103.142l28.284,28.284L235.284,76.568z"/>
                        </svg>
                    </div>
                </div>
            </h1>
            <span ref={myMe3} >
                Welcome to my online space.
            </span>
        </div>
    )
}

export default Me
