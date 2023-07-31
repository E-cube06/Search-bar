import React, { useState } from 'react'
import './SearchBar.css';
import Search from './Search-bar-components/Search';
import SearchResultList from './Search-bar-components/SearchResultList';

const SearchBar = () => {
    const [results, setResults] =useState([])
    
  return (
    <div className='App'>
        <div className='search-bar-container'>
        <Search setResults={setResults}/>
        <SearchResultList results={results}/>
        
        </div>
    </div>
  )
}

export default SearchBar