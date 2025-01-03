import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div>
    <div className="header">
        <img src={assets.header}></img>
     
    </div>
     <div className="header-contents">
     {/* <button>View Menu</button> */}
   </div>
   </div>
  )
}

export default Header
