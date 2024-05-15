import React from 'react'
import Button from './Button'

const ButtonNameList = ['All', 'Live', 'News', 'Cricket', 'Virat Kohli', 'Mumbai Indians', 'React', 'JavaScript', 'Comedy', 'Investment']

const ButtonList = () => {
 return(
  <div className='flex'>
{ButtonNameList.map(name =>{
  return <Button key={name}name={name}/>
})}
  </div>
 )
}

export default ButtonList