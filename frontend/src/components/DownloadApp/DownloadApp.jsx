import React from 'react'
import './DownloadApp.css'
import { assets } from '../../assets/assets'

const DownloadApp = () => {
  return (
    <div className='download-app' id='download-app'>
      <p>For Better Experience Download <br></br> Tomato App</p>
      <div className="download-app-methods">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default DownloadApp