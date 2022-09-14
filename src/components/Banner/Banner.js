import React from 'react';
import bannerImg from '../../images/banner/banner-img.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-pattern'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='bg-hero'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;