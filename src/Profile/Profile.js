import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import Post from '../common/Post/Post';
import { useParams } from 'react-router-dom';
import { UserService } from '../services/user.service';
import ProfileHeader from './ProfileHeader/ProfileHeader';

function Profile() {
    const [posts, setPosts] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        async function getPosts(){
            try{
                const posts = await UserService.getPosts(username)
                setPosts(posts);
                console.log(posts)
            }catch(err){
                 console.log(err);
            }
        }
        getPosts();
    }, [username])

    return (
        <> 
            <ProfileHeader username={username} postNum= {posts.length}/>
        <hr />
        <div className='row'>
            {posts.map(post => (
            <Post key={post._id} data={post} />
            ))}
        </div>
        </>
    );
}
export default Profile;