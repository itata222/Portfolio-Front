import React from 'react';
import Contact from './Contact';
import Me from './Me';
import MyWorks from './MyWorks';


const Home = () => {
    return (
        <div className="home">
                <Me />
                <MyWorks />
                <Contact />
        </div>
    )
}

export default Home
