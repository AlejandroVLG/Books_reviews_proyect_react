import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { userData } from '../User/userSlice'

import "./MyProfile.css"

const MyProfile = props => {

  try {

    const [profileData, setProfileData] = useState({
      profile: []
    })

    const identification = useSelector(userData);
    let requirements = {
      headers: {
        "Authorization": `Bearer ${identification.token}`

      }
    }
    useEffect(() => {
      axios.get('https://books-reviews-app-proyect.herokuapp.com/api/user/myProfile', requirements)
        .then(resp => {
          setProfileData({
            profile: resp.data
          })

        })

    }, [])

    return (
      <div className='MyProfile'>
        
        {profileData.length === 0 && <p>Cargando...</p>}
        {
          <ProfileCard data={profileData.profile} />
        }
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}

export default MyProfile; 