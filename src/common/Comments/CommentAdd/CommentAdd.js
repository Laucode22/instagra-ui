import React from 'react'
import { useState } from 'react/cjs/react.development';
import { PostService } from '../../../services/pos.service';
import './CommentAdd.scss';


 function CommentAdd( { postId, onCommentAdd } ) {
     const [content, setContent] = useState('')
     
    async function submit(e){
        e.preventDefault();
		const comment = await PostService.addComment(postId, content);
		onCommentAdd(comment);
		setContent('');
     }

    return (
        <form onSubmit={submit}>
         <div className='mb-2'>
            <textarea className='form-control' onChange={(e) => setContent(e.target.value)} value={content}> </textarea>
         </div>
        <button className='btn btn-success'>Post!</button>
        </form>
    )
}
export default CommentAdd;