import React from 'react'
import "./Header.scss"

const Header = () => {
  return (

    <div  Container className='header' sm={0} md={12} lg={6} xl={6} xxl={6}>
      <img
        className='headerImg'
        src="../../..public/Img/Vector1.jpg"
        alt="headerImage"
      />
    </div>
  )
}

export default Header