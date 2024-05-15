import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
     let [searchParam] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(closeMenu())
    }, [])
  return (
    <div className='flex flex-col'>
    <div className='p-2 flex'>
      <div>
      <iframe width="1000" height="450" 
        src={"https://www.youtube.com/embed/"+searchParam.get('v')} 
        title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='rounded-lg'></iframe>
          <CommentsContainer/>
      </div>
       <div className='mx-2'>
         <LiveChat/>
       </div>
    </div>
    
    </div>
    
  )
}

export default WatchPage