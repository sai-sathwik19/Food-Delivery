import React,{useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='display-food'>
        <h2>Top dishes near you</h2>
        <div className="display-food-list">
            {food_list.map((item,index)=>{
               if(category==="All"  || category===item.category)
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
            })}
        </div>

    </div>
  )
}

export default FoodDisplay