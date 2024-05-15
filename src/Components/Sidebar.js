import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const toggleMenuFlag = useSelector(state => state.app.isMenuOpen)
  const listStyle = 'p-1 mx-1 cursor-pointer'

  if(!toggleMenuFlag) return null    //Early return 
  return (
    <div className='min-w-56 shadow-lg m-2 p-2'>
      <ul>
        <li className={listStyle}><Link to={'/'}>Home</Link></li>
        <li className={listStyle}>Shorts</li>
        <li className={listStyle}>Subscriptions</li>
      </ul>
      <h1 className='font-bold my-1'>Subscriptions</h1>
      <ul>
       <li className={listStyle}>Music</li>
       <li className={listStyle}>Sports</li>
       <li className={listStyle}>Gaming</li>
       <li className={listStyle}>Movies</li>
      </ul>
      <h1 className='font-bold my-1'>You</h1>
      <ul>
       <li className={listStyle}>Your Channel</li>
       <li className={listStyle}>History</li>
       <li className={listStyle}>Playlists</li>
       <li className={listStyle}>Your Videos</li>
       <li className={listStyle}>Warch Later</li>
       <li className={listStyle}>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar