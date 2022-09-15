import React from 'react';
import Banner from '../../../components/Banner/Banner';
import HomeAuthors from '../../../components/HomeAuthors/HomeAuthors';
import RecentBlogs from '../../../components/RecentBlogs/RecentBlogs';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeAuthors />
            <RecentBlogs />
        </div>
    );
};

export default Home;