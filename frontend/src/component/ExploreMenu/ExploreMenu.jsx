import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>CHECKOUT ALL THE CATEGORIES</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of all the books available at a affordable cost and at a one place with high discounts.</p>
        <div className="explore-menu-list">
          {
          menu_list.map((item,index) =>{
            return(
              <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                <h2>{item.menu_name}</h2>
              </div>
            )
          })
          }
        </div>
      </div>
      
    </div>
  )
}

export default ExploreMenu
