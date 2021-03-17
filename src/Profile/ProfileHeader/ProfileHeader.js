
import React from 'react'
import { useState, useEffect} from 'react/cjs/react.development';
import Avatar from '../../common/Avatar/Avatar';
import { UserService } from '../../services/user.service';

function ProfileHeader({username, postNum}) {
    const [user, setUser] = useState({});
     useEffect(() => {
         async function getUser(){
             const user = await UserService.get(username);
             setUser(user);
         }
         getUser()
     },[username])
    return (
        
        <div className='mt-5'>
            <h2>{user.username}</h2>
            <Avatar image={user.avatar} size="lg" />
            <p>{postNum} posts</p>
        </div>
    );
}
export default ProfileHeader;