import React, { useEffect } from 'react';
import { useState } from 'react';

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='m-5 md:m-20'>
            <h2 className='text-4xl font-semibold text-sky-900'>Latest Articles</h2>
            <h3 className='text-xl mt-2'>Discover the most outstanding articles in all topics of life.
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <div>
                    {
                        blogs.slice(0, 1).map(blog => <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src={blog.image} alt="Shoes" /></figure>
                            <div className="card-body">

                                <div className="badge badge-secondary bg-primary">{blog.category}</div>
                                <h2 className="card-title">
                                    {blog.title}

                                </h2>
                                <p>{blog.description}</p>
                                <div className="card-actions justify-end mt-5">
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={blog.authorImg} alt='' />
                                        </div>
                                    </div>
                                    <div className="grid align-middle">{blog.author}</div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                {/* Secound Row */}
                <div>
                    {
                        blogs.slice(0, 3).map(blog => <div className="card card-side bg-base-100 shadow-xl my-5">
                            <figure><img className='w-full h-full' src={blog.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;