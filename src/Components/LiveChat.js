 import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from './utils/chatSlice'
import { randomNameGenerator } from './Config/Constants'
 
 const LiveChat = () => {
  const dispatch = useDispatch()
  const [liveMessage, setLiveMessage] = useState('')

  const liveChatMessage = useSelector(state => state.liveMessages.messages)

  useEffect(()=>{
   const messageInterval = setInterval(()=>{
    dispatch(addMessages(randomNameGenerator.generateRandomObject()))
   },500)

   return ()=> clearInterval(messageInterval)
  }, [])
   return (
    <>
     <div className='flex flex-col-reverse p-2 border border-black-400 w-[465px] h-[600px] shadow-xl rounded-t-lg bg-gray-100 overflow-y-scroll'>
      {liveChatMessage.map((msg, index)=>{
        return <ChatMessages key={index} name={msg.name} message={msg.message}/>
      })}
      </div>
      <form className='w-[465px] p-2 flex border border-black-400 rounded-b-lg'>
        <input placeholder='Chat..'
         className=' px-2 w-[400px] border border-gray-400 rounded-lg' 
         type='text'
         onChange={(e)=> setLiveMessage(e.target.value)}
         value={liveMessage}
        />
        <button className='mx-2 p-1 border border-black rounded-lg bg-slate-200'
        type='submit'
        onClick={(e)=>{
          e.preventDefault()
          dispatch(addMessages({
          name: 'Abhishek M',
          message: liveMessage
        }))
        setLiveMessage('')
          }}
        >Send</button>
      </form>
      </>
   )
 }
 
 export default LiveChat