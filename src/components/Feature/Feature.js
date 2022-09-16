import React from 'react';
import featureImg from '../../images/feature/BecomeAnAuthorImg.2c832890.png';

const Feature = () => {
    return (
        <div className='m-20'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-5'>
                    <h3 className='text-xl text-slate-600'>SUPPER CHANGE YOUR PLANNING POWERS</h3>
                    <h2 className='text-green-600 text-3xl font-semibold mt-3'>Become an author and share your great stories
                    </h2>
                    <p className='mt-3'>Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.
                    </p>
                    <button className='px-6 py-2 bg-green-600 text-white rounded mt-5'>Become an author</button>
                </div>
                <div className=' flex justify-end'>
                    <img className='w-1/2' src={featureImg} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Feature;