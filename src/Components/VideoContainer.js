import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_LIST_API } from './Config/Constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getVideos()
  },[])
  
  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_LIST_API)
    const json_data = await data.json()
    setVideos(json_data.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos?.map(video => {
        //const searchedVideoType = video.kind.includes('searchResult')
        return <Link key={ video.id} 
           to={'/watch?v='+video.id}>
          <VideoCard videoData= {video}/>
          </Link>})}
    </div>
  )
}

export default VideoContainer