import React from 'react'

const HeaderLeft = () => {
    return (
        <div className="headerLeft">
            <div className="siteHeadlines">
                <div onClick={()=>{
                    document.querySelector('.me').scrollIntoView({ 
                        behavior: 'smooth' ,
                        block: 'center'
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
                        behavior: 'smooth',
                        block: 'center'
                      });
                }}>Contact</div>
            </div>
        </div>
    )
}

export default HeaderLeft
