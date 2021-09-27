import React from 'react';
import ScrollBar from '../ScrollBar';
import BackGroundWebGL from '../BackGroundWebGL';
import Contact from './Contact';
import Me from './Me';
import MyWorks from './MyWorks';


const Home = () => {
    return (
        <div className="home">
                <ScrollBar />
                <BackGroundWebGL />
                <Me />
                <MyWorks />
                <Contact />
        </div>
    )
}

export default Home
