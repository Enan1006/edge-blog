import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loader from '../Shared/Loader';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset link has been sent');
        }
        else {
            toast('Please enter your email');
        }
    }

    if (sending) {
        return <Loader />
    }
    return (
        <div className='m-20'>
            <h2 className='text-violet-600 font-bold text-4xl text-center'>Reset Password</h2>
            <form onSubmit={handleSubmit} className="w-4/5 md:w-1/2 mx-auto">
                <div>
                    <label class="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="email" name="email" useR className='block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' id="" placeholder='Enter Email' />
                </div>
                <div className='mt-5'>
                    <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-violet-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-violet-600 hover:border-violet-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ResetPass;