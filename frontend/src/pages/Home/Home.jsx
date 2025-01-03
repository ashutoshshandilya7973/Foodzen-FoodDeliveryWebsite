import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'
function Home() {
  const[category,setcategory]=useState("All")
  return (
    <div className='head'>
       {/* <Header/> 
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/> */}
      Hello World
    </div>
  )
}

export default Home
