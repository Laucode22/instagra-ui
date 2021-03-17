import React from 'react'
import Avatar from '../../Avatar/Avatar'

 function Comment({comment}) {


    return (
        <div>
            <Avatar image={comment.user.avatar} />
            <p className='mb-0'>{comment.content}</p>
            <span>{comment.createdAt}</span>
        </div>
    )
}
export default Comment;
