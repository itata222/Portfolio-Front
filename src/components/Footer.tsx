import React, {  useState } from 'react'

const Footer = () => {
    const [now, setNow] = useState('');
    setInterval(() => {
        setNow(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
    }, 1000);

    return (
        <div className="footer">
            <div className="stars">
                <img src="https://img.icons8.com/material-rounded/24/000000/star--v1.png" alt="star"/>
                <img src="https://img.icons8.com/material-rounded/24/000000/star--v1.png" alt="star"/>
                <img src="https://img.icons8.com/material-rounded/24/000000/star--v1.png" alt="star"/>
            </div>
            <div className="copyright">
                <span>© 2021 ITAMARHAGAI. ALL RIGHTS RESERVED.</span>
            </div>
            <div>{now}</div>
        </div>
    )
}

export default Footer
