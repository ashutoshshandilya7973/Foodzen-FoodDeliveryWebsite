import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className="food-display" id="food-display">
      <h2>All Categories of Book Available Here....</h2> 
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                  if(category==="All"|| category===item.category){
                    return  <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                  }
                  
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay