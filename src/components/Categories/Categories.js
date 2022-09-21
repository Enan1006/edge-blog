import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';

const Categories = () => {
    const { categoryId } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://edge-blog-server.vercel.app/categories/${categoryId}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='m-5 md:m-20'>
            <h2 className='text-5xl font-bold text-sky-900'>Top trending topics</h2>
            <h3 className='text-2xl mt-5 mb-10'>Discover 233 topics</h3>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categories.map(category => <div className="card my-10 lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-96' src={category.image} alt="Album" /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary">{category.category}</div>
                            <h2 className="card-title">{category.title}</h2>
                            <p>{category.description.slice(0, 200)}</p>
                            <div className="card-actions justify-end">
                                <Link to={category._id} className="text-white bg-green-600 rounded px-6 py-2">See Details</Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;