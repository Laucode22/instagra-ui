import React from 'react';
import './Header.scss';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import Menu from './Menu/Menu';

function Header() {
    return (
        <header className="Header">
            <nav className="nav-container navbar navbar-dark bg-light fixed-bottom">
             <div className= "container  justify-content-start">
                 <a className="navbar-brand text-secondary instagram" href="/">Instagram</a>
                <Menu/>
             <div className="nav ml-auto">
               <HeaderAvatar/>
               </div>
             </div>
         </nav>     
      </header>
    )
}
export default Header;