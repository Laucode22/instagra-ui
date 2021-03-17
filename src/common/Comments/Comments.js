import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { PostService } from '../../services/pos.service';
import CommentAdd from './CommentAdd/CommentAdd';
import Comment from './Comment/Comment';
import './Comments.scss';


 function Comments( {postId} ) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments(){
            try{
            const commentsArr = await PostService.getComments(postId)
            setComments(commentsArr);
            }catch(err){
               console.log(err);
            }
        }
        getComments();
    }, [postId]);

    function onCommentAdd(comment){
        setComments([...comments, comment]);

    }
    return (
        <div>
            <h2 className='h5'>Comments</h2>
            <div className='my-2'>
            {comments.map(comment => <Comment key={comment._id} comment={comment} />)}
            </div>
            <CommentAdd postId={postId} onCommentAdd={onCommentAdd}/> 
        </div>
    )
}
export default Comments;