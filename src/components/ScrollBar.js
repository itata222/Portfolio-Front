import React, { useEffect, useRef } from 'react'

const ScrollBar = () => {
    const scrollBarRef=useRef();

    useEffect(() => {
        window.addEventListener("scroll", function(e){
            if (scrollBarRef!=null){
                scrollBarRef.current.style.transform=`translateY(${window.scrollY}px)`
            }
        })
    });

    return (
        <div  className="scrollBar">
            <span ref={scrollBarRef} className="scrollBar-content">

            </span>
        </div>
    )
}

export default ScrollBar
