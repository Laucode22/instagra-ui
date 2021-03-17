import { Link } from 'css.gg';
import React from 'react'
import Avatar from '../../common/Avatar/Avatar';
import './SearchResult.scss';

 function SearchResult({user}) {
    return (
        <div className='col-lg-4'>
            <Link to={'/profile/' + user.username}>
                <div className='d-flex'>
                   <div>
                       <Avatar size='md' image={user.avatar}/>
                   </div>
                   <div>
                       <strong>{user.username}</strong>
                       <p>{user.bio}</p>
                   </div>
                </div>
            
            </Link>
            
        </div>
    );
}
export default SearchResult;