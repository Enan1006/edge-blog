import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SignleBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://edge-blog-server-2.onrender.com/post/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId])
    return (
        <div className='m-20'>
            <div className="card mx-auto w-1/2 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={blog.image} alt="Shoes" /></figure>

                <div className="card-body">
                    <div className="card-actions justify-start">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={blog.authorImg} alt='' />
                            </div>
                        </div>
                        <div className="flex align-middle">
                            <h4 className='text-lg text-slate-700 font-bold'>{blog.author}</h4>
                        </div>
                    </div>
                    <h2 className="card-title text-center">
                        {blog.title}
                        <div className="badge badge-primary">{blog.category}</div>
                    </h2>
                    <p>{blog.description}</p>

                </div>
            </div>
        </div>
    );
};

export default SignleBlog;