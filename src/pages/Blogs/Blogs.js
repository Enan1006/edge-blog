import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://edge-blog-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <div>
            <div className='m-20'>
                {
                    blogs.map(blog => <div className="card my-10 lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={blog.image} alt="Album" /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary">{blog.category}</div>
                            <h2 className="card-title">{blog.title}</h2>
                            <p>{blog.description.slice(0, 200)}</p>
                            <div className="card-actions justify-end">
                                <Link to={blog._id} className="text-white bg-green-600 rounded px-6 py-2">See Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;