import React, {useRef} from "react";
import '../assets/Styles/PostForm.css'

export default function PostForm({posts, setPosts}){
    const InputValue = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newPost = {
            username: "DiegoLechuga",
            postText: InputValue.current.value,
            isLiked: false,
            idPost: posts.length 
        }

        setPosts([...posts, newPost]);
        InputValue.current.value = "";
    }

    return (
        <form>
            <input 
                type="text"
                ref={InputValue}
                placeholder="Escribe sobre tu publicación..." 
            />
            <button onClick={(e) => handleSubmit(e)}>Publicar</button>
        </form>
    )
}