import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyBlogs = () => {
    const [user] = useAuthState(auth);
    const [blogs, setBlogs] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`https://edge-blog-server.vercel.app/my-post?email=${email}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [user]);
    useEffect(() => {
        fetch('https://edge-blog-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className='h-screen'>
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

export default MyBlogs;