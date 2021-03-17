import React from 'react'
import PropTypes from 'prop-types';
import avatarDefault from'./avatar.png';
import './Avatar.scss'
 function Avatar(props) {

   const image = props.image || avatarDefault;
   const size =  props.size || 'md';
   const className = 'Avatar--' + size;

    return (
            <img  src={image} className={'Avatar ' + className} alt="avatar" />
            
    );
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
export default Avatar;