import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from './Card';

function Likes(props) {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.slice(0, 10)); // Get only first 10 posts
            });
    }, []); // ADDED empty dependency array to prevent infinite loop

    return (
        <div id="main">
            {posts.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Likes;