import React from 'react';
import s from "./Post.module.css";

function Post(props) {
    return(
        <div className={s.item} data-post={props.id}>
            <img src="https://imgur.com/I80W1Q0.png" alt="text"/>
            { props.message }
            <div>
                <span>like : {props.likeCount}</span>
            </div>

        </div>
    )
}
export default Post;