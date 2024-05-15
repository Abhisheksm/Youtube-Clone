import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/appSlice'
import { AUTOSUGGEST_API, YOUTUBE_SEARCH_API } from './Config/Constants'
import { cacheSearchResult } from './utils/searchSlice'
import { setVideoList } from './utils/ListVideoSlice'
import { Link } from 'react-router-dom'

const Head = () => {
  const dispatch = useDispatch()
  const [searchQuery, setsearchQuery] = useState('')
  const [autoSuggestions, setAutoSuggestions] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)

  const searchCache = useSelector(state => state.search)
  useEffect(()=>{
   const timer = setTimeout(()=>{
    if(searchCache[searchQuery])
      {
        setAutoSuggestions(searchCache[searchQuery])
      }
      else{
        getAutoSuggestions()
      }
   },200)
   return ()=>{
    clearTimeout(timer)
   }
  },[searchQuery])
  const handleToggleMenu =()=>{
   dispatch(toggleMenu())
  }

  const getAutoSuggestions = async () =>{
    const data = await fetch(AUTOSUGGEST_API+searchQuery)
    const jsonData = await data.json()
    setAutoSuggestions(jsonData[1])
    dispatch(cacheSearchResult({[jsonData[0]] : jsonData[1]}))
  }

/* 
*Debouncing
key -> i
 render the component
 useEffect()
 create  new timer and start timer
 call API
 
 pressed key again within given timer 
 key -> ip
 unmount the component (=> in that it will clear old timer)
 rerender the component
 useEffect()
 again create new timer 
 call API */

 const handleSearchResult = async (searchValue) =>{
  setShowSuggestion(false)
  const data = await fetch(YOUTUBE_SEARCH_API+ searchValue)
  const searchedData = await data.json()
  dispatch(setVideoList(searchedData.items))
 }

 const AutoSuggestionslist = autoSuggestions.map((item)=>{
  return  <Link key={item} to={'/results?search_query='+searchQuery}>
 <p className='px-2 py-1 hover:bg-gray-100 rounded-md' 
  onClick={() =>handleSearchResult(item)}>🔍 {item}</p>
  </Link>
 })
 
  return (
    <div className='grid grid-flow-col p-1 m-1 shadow-lg'>
        <div className='flex col-span-1' >
            <img className='h-8 my-[13px] pl-3 cursor-pointer'
             alt='Menu' 
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
             onClick={handleToggleMenu}
             />
            <img className='h-[60px] mx-5' alt='youtube-logo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
        </div>
        <div className='my-[13px] col-span-10 pl-[150px]'>
          <div>
          <input className='border border-gray-500 rounded-l-full py-1 px-3 w-1/2' 
          placeholder='Search...' 
          type='text'
          value= {searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestion(true)}
          // onBlur={()=> setShowSuggestion(false)}
          />
          <button className='py-1 px-2  rounded-r-full border border-gray-500 bg-gray-100'>Search</button>
          </div>
          {showSuggestion && autoSuggestions.length>0 && (<div className='absolute z-100 bg-slate-50 w-[485px] rounded-lg py-3 px-2 m-1 shadow-lg border-gray-100'>
{AutoSuggestionslist}
          </div>)}
        
        </div>
        <div  className='my-[13px] col-span-1' >
          <img  className='h-10' alt='User-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        </div>
    </div>
  )
}

export default Head