import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { userData } from '../User/userSlice'

import "./MyProfile.css"

const MyProfile = props => {

  try {

    const credentials = useSelector(userData)

    const myProfile = credentials.infoData

    return (
      <div className='MyProfile'>
        
        {myProfile.length === 0 && <p>Cargando...</p>}
        {
          <ProfileCard data={myProfile} />
        }
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}

export default MyProfile; 