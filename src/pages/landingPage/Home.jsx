import React from 'react'
import '../../styles/Home.scss'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home_section'>
      <p>With the rising cost of paper and advent for digitalisation, Let’s reduces the use of paper in basic request transactions in your organisation. Manage your organisation by a click of the button</p>
      <div>
        <h1>Your best value for a paperless organisation</h1>
        <Link className='link_nav' to="">Continue</Link>
      </div>
    </div>
  )
}

export default Home