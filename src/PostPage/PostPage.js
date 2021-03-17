import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { PostService } from '../services/pos.service';
import Avatar from '../common/Avatar/Avatar';
import PostDate from '../common/Post/PostDate/PostDate';
import './PostPage.scss';
import Comments from '../common/Comments/Comments';

function PostPage() {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPost(){
            try{
                const p = await PostService.get(id);
                if(p){
                   setPost(p) 
                }else{
                    console.log('POST DOES NOT EXIST !')
                }
             
            }catch(err){
                 console.log(err);
            }
            
        }
        getPost();
    }, [id]);
    return (
     <div className='PostPage'>
{ post && (
            <div className='row'>
            <div className='col-md-8'>
                <div>
                   <img src={'data:; base64,' + post.image} alt='' style={{width : '400px'} ,{height :'400px'}}/> 
                    </div>
                
                <div>
                    <p>{post.description}</p>
                </div>
                <div>
                 <PostDate date={post.createdAt}/>
                </div>
            </div>
          <div className='col-md-4'>
              <header>
               <div>
                <Link to={'/profile/${post.user._id}'} className='d-flex'>
                <Avatar size='md' image={post.user.avatar} />
                <h3>{post.user.username}</h3>
                </Link>

               </div>

              </header>

              <hr/>
              <Comments postId={post._id} />
            </div>
          
        </div>
        )}
     </div>   
        
        
    )
}
export default PostPage;