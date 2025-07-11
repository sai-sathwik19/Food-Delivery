import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import DownloadApp from '../../components/DownloadApp/DownloadApp'



const Home = () => {

      const [category,setCategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <DownloadApp></DownloadApp>
    </div>
  )
}

export default Home