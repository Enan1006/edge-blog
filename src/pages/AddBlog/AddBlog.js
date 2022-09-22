import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddBlog = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const content = {
            title: data.title,
            image: data.image,
            description: data.description,
            name: user?.displayName,
            email: user?.email,
            category: data.category
        }
        fetch('https://edge-blog-server-2.onrender.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', content);
            })
        toast("Blog added successfull");
        navigate('/');

    };
    return (
        <div>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl p-20">
                <h2 className='text-green-500 font-bold text-4xl text-center'>Add Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Title</label>
                        <input {...register("title", {
                            required: {
                                value: true,
                                message: "Title Address is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" />
                        <span>{errors.title?.type === 'required' && <p className='text-red-500'>{errors.title?.message}</p>}</span>
                    </div>
                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Category</label>
                        <select  {...register("category", {
                            required: {
                                value: true,
                                message: "Category Address is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" >
                            <option value="science">science</option>
                            <option value="education">education</option>
                            <option value="food">food</option>
                            <option value="sports">sports</option>
                            <option value="world">world</option>
                            <option value="business">business</option>
                            <option value="technology">technology</option>
                        </select>
                        <span>{errors.category?.type === 'required' && <p className='text-red-500'>{errors.category?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Description</label>
                        <textarea {...register("description", {
                            required: {
                                value: true,
                                message: "Description is required"
                            }
                        })} cols="30" rows="10" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" />
                        <span>{errors.description?.type === 'required' && <p className='text-red-500'>{errors.description?.message}</p>}</span>
                    </div>
                    <div className='mt-5'>
                        <label class="form-label inline-block mb-2 text-gray-700">Image</label>
                        <textarea {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" />
                        <span>{errors.image?.type === 'required' && <p className='text-red-500'>{errors.image?.message}</p>}</span>
                    </div>

                    <div className='mt-5'>
                        <input type="submit" value="Submit" className="block w-full px-3 py-1.5 text-base font-normal  bg-green-500 text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out hover:bg-white hover:text-green-500 hover:border-green-500 m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none cursor-pointer" />

                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;