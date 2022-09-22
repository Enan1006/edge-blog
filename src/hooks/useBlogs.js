import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const useBlogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://edge-blog-server-2.onrender.com/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    return blog;
}
export default useBlogs;
