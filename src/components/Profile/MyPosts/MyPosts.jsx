import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post'
import PostReduxForm from "./PostForm";

function MyPosts(props) {

    let postItem = props.posts.map( postMessage =>
        <Post message={postMessage.message}
              likeCount={postMessage.likeCount}
              id={postMessage.id}   />);

    let onSubmit = (values) => {
        props.addPost(values.postArea);
    }
    return(
        <div className={classes.postWrapper}>
            <div className="wrapperContent">
                My post
                <div>
                   <PostReduxForm onSubmit={onSubmit}/>
                </div>

            </div>
            <div className={classes.posts}>
                {postItem}
            </div>
        </div>
    )
}
export default MyPosts;