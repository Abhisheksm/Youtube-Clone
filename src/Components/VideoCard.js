import React from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({videoData}) => {
    const toggleMenuFlag = useSelector(state => state.app.isMenuOpen)
    const {snippet, statistics} = videoData
    const {channelTitle, title, thumbnails} = snippet

  return (
    <div>
        <div className='mx-2 mt-2 px-2 pt-2 ' >
            <img className={'rounded-t-lg ' + (toggleMenuFlag ? 'w-52' : 'w-72')} alt={'thumbnail'} src={thumbnails.medium.url}/>
        </div>
        <div className={'ml-4 min-h-26 p-1 bg-slate-50 rounded-b-lg' + (toggleMenuFlag ? ' w-52' : ' w-72')}>
          <p className='font-bold text-ellipsis line-clamp-2'>{title}</p>
          <p className='font-light'>{channelTitle}</p>
          {statistics?.viewCount && <p className='font-light'>{statistics?.viewCount} views</p>}
        </div>
    </div>
  )
}

export default VideoCard