import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import './Post.scss'
import PostDate from './PostDate/PostDate';

function Post({data}) { 
    return (
        <div className='col-12 col-md-4'>
            <article className='post-container'>
            <header className='header'>
                <div className='post-avatar d-flex'>
                <Link to={'/profile/' + data.user.username}>
                 <Avatar size='md' image={data.user.avatar}/>
                 <span>{data.user.username}</span>
                </Link>
            </div>
            <div className='Post__date'>
              <PostDate date={data.createdAt}/>
            </div>
            </header>

          <div className='Post__image'>
              <Link to={'/post/' + data._id}>
                  <img src={'data:; base64,' + data.image} className="Post__image" alt="" style={{width : '200px'} ,{height :'200px'}}/>
              </Link>
              </div>
          <div className='post-content'>
              <h3 className='Post__description'>{data.description}</h3>
              </div>      
            </article>    
        </div>
    );
}
export default Post;