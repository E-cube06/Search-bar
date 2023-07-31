import React from 'react'
import './SearchResult.css'

export const SearchResult = ({result}) => {
  return (
    <div onClick={(e)=>{alert(`You clicked on ${result.name}`)}} className='search-result'>{result.name}</div>
  )
}
