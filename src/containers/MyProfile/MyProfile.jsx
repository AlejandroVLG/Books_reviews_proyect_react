import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { userData } from '../User/userSlice'
import "./MyProfile.scss"

const MyProfile = props => {

  try {

    const credentials = useSelector(userData)

    const myProfile = credentials.infoData

    return (
      <div className='myProfile'>

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