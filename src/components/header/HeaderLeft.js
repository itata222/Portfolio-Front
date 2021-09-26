import React from 'react'
import logo from '../../images/logo.jpeg'

const HeaderLeft = () => {
    return (
        <div className="headerLeft">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="siteHeadlines">
                <div onClick={()=>{
                    document.querySelector('.me').scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                }}>Me</div>
                <div onClick={()=>{
                    console.log(document.querySelector('.works'))
                    document.querySelector('.works').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      })
                }}>Works</div>
                <div onClick={()=>{
                    console.log(document.querySelector('.contact'))
                    document.querySelector('.contact').scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                }}>Contact</div>
            </div>
        </div>
    )
}

export default HeaderLeft
