import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Shared/Loader';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    if (loadingEmail || loadingGoogle) {
        return <Loader></Loader>;
    }
    let from = location.state?.from?.pathname || "/";
    if (userEmail || userGoogle) {
    }

    const onSubmit = (info) => {
        signInWithEmailAndPassword(info.email, info.password);
        navigate(from, { replace: true });

    };
    if (errorEmail || errorGoogle) {
        toast(`${errorEmail?.message || errorGoogle?.message}`)
    }

    return (
        <div>
            <div className="card w-4/5 md:w-1/2 mx-auto bg-base-100 shadow-xl p-20">
                <h2 className='text-green-600 font-bold text-4xl text-center'>Please Login!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Email</label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "Email Address is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.email?.type === 'required' && <p className='text-red-500'>{errors.email?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <span>{errors.password?.type === 'required' && <p className='text-red-500'>{errors.password?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-green-600 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-green-600 hover:border-green-600 m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer" />
                    </div>
                </form>
                <div className='mt-10'>
                    <button onClick={() => signInWithGoogle()} type="button" class="mx-auto text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </div>
                <div className='mt-5'>
                    <Link to='/reset-password' className='underline text-green-600'>Reset Password</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;