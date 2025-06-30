import React from "react";
import "../assets/Styles/PostItem.css"

export default function PostItem({username, postText, isLiked, index, posts, setPosts}){

    const handleLike = (index) => {
        const postsClicked = posts[index];
        const updatedPost = {
            username: postsClicked.username,
            postText: postsClicked.postText,
            isLiked: !postsClicked.isLiked,
            idPost: postsClicked.idPost
        }

        const newPosts = [];

        for (let i = 0; i < posts.length; i++) {
            if(posts[i].idPost != postsClicked.idPost){
                newPosts.push(posts[i]);
            } else {
                newPosts.push(updatedPost);
            }
        }

        setPosts(newPosts);
    }

    return(
        <div className="post-item">
            <h1>{username}</h1>
            <p>{postText}</p>
            <img onClick={() => handleLike(index)} src={isLiked ? "https://magikpng.com/wp-content/uploads/2024/08/Heart-PNG-1024x819.png" : "https://www.freeiconspng.com/uploads/heart-outline-19.png"} alt="like" />
        </div>
    )
}