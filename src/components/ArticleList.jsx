import React from "react";
import Article from "./Article";

export default function Articlelist(props) {
    return (
        <main>
           {
            props.posts.map(post => (
                <Article 
                key = {post.id}
                title = {post.title}
                date = {post.date}
                preview = {post.preview}
                />
            ))
           }
        </main>
    )
}




