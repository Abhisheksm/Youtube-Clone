import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import SearchedVideoCard from './SearchedVideoCard'
import { Link } from 'react-router-dom'

const LazySearchedVideoCard = lazy(() => import(
  './SearchedVideoCard'))

const SearchedVideosContainer = () => {
  const videoList = useSelector(state => state.videoList.videos)
  return (
    <div>
    {videoList && videoList.map((video)=>{
        return <Link key={video.id.videoId} to={'/watch?v='+video?.id?.videoId}>
          <Suspense fallback={<div>Loading Videos...</div>}>
          <LazySearchedVideoCard  videoData={video}/>
          </Suspense>
          </Link>
    })}
    </div>
    
  )
}

export default SearchedVideosContainer