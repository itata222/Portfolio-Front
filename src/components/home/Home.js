import React from 'react';
import HeaderHome from '../header/HeaderHome';
import Contact from './Contact';
import Me from './Me';
import MyWorks from './MyWorks';


const Home = () => {
    return (
        <>
            <HeaderHome />
            <div className="home">
                    <Me />
                    <MyWorks />
                    <Contact />
            </div>
        </>
    )
}

export default Home
