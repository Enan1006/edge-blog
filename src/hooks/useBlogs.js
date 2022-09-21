import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const useBlogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://edge-blog-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    return blog;
}
export default useBlogs;
