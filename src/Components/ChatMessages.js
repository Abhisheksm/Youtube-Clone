import React from 'react'

const ChatMessages = ({name, message}) => {
  return (
    <div className='flex items-center bg-gray-200 px-2 py-1 my-1 rounded-lg'>
         <img  className='h-10' alt='User-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
         <span className='px-2 font-bold'>{name} : </span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessages