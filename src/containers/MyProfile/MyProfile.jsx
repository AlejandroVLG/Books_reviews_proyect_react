import React from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';

import "./MyProfile.css";

const MyProfile = props => {

  const identification = useSelector(userData)

  return (
    <div className='MyProfile'>
      <p>Mi perfil</p>
    </div>
  )
}

export default MyProfile; 