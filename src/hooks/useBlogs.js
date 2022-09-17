import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return blogs;
}
export default useBlogs;
