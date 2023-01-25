import React from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userData } from '../User/userSlice'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Spinner from '../../components/Spinner/Spinner'
import "./MyProfile.scss"

const MyProfile = () => {

  try {

    const navigate = useNavigate()

    const credentials = useSelector(userData)

    const myProfile = credentials.infoData

    if (credentials.token === "") {

      return (

        useEffect(() => {

          navigate("/books")
        }, [])
      )
    } else {

      return (
        <div>

          {myProfile.length === 0 && <p><Spinner /></p>}
          {
            <ProfileCard data={myProfile} />
          }
        </div>
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export default MyProfile