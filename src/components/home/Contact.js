import React, { useEffect, useRef } from 'react'

const Contact = () => {
    const contact=useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", function(e){
            if(contact.current!=null){
                contact.current.style.transform=`translateY(-${window.scrollY * 0.1}px)`
            }
        })
    });

    return (
        <div ref={contact} className="contact">
            <h1>
                <span>Hit me up for</span>
                <span>Future Project.</span>
            </h1>
            <div className="email">
                <a href="mailto:itamar.hagai1@gmail.com">itamar.hagai1@gmail.com</a>
            </div>
            <div className="socialMedia">
                <div className="phoneNumber">
                    <span>ISR</span>
                    <span>+972 542247755</span>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/itamar-hagai-4614911b8/">Linkedin</a>
                    <span>&#8226;</span>
                    <a href="https://www.instagram.com/itamarhagai/">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
