import React, { useState } from 'react'
import '../App.css'

function Card({ post }) {
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div id="Card">
            <p>Title : {post.title}</p>
            <p>Likes : {likes}</p>
            <button id="like" onClick={handleClick}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/422/468/small_2x/Multimedia__28107_29.jpg" alt="like" />
                LIKE
            </button>
        </div>
    );
}

export default Card;