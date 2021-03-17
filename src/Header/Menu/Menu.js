import React from 'react';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

 function Menu() {
    return (
    <ul className="navbar-nav flex-row ">
     <li className="nav-item ">
        <Link className="nav-link" to="/">
         <FontAwesomeIcon icon={faHouseUser} size='2x' />    
         </Link>
     </li>
     <li>
         <Link className="nav-link" to="/post/create">
         <FontAwesomeIcon icon={faPlusSquare} size='2x'/>    
         </Link>
      </li>
      <li>
         <Link className="nav-link" to="/search">
         <FontAwesomeIcon icon={faSearch} size='2x'/>    
         </Link>
      </li>
    </ul>

    );
}
export default Menu;