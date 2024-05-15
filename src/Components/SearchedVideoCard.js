import React from 'react'

const SearchedVideoCard = ({videoData}) => {
    const {snippet} = videoData
    const {title, description, channelTitle} = snippet
  return (
    <div className='flex mx-2 my-5 p-2'>
        <div className=''>
        <iframe width="450" height="250" 
        src={"https://www.youtube.com/embed/"+videoData.id.videoId} 
        title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='rounded-lg'></iframe>
        </div>
        <div className='mx-2  px-2'>
         <p className='font-semibold text-2xl'>{title}</p>
         <p className='my-2 text-md'> 1.7M Views . 1 day ago </p>
         <p className='my-2 text-lg'>{description}</p>
         <p className='my-2 text-md'>{channelTitle}</p>
        </div>
    </div>
  )
}

export default SearchedVideoCard