import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomePackage from '../HomePackage/HomePackage';
import HomeText from '../HomeText/HomeText';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomePackage></HomePackage>
            <HomeText></HomeText>
        </div>
    );
};

export default Home;