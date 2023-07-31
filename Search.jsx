import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import './Search.css';
const Search = ({setResults}) => {
    const[input, setInput] = useState('')
    const fetchData = (value)=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res=>res.json())).then(json=>{
            const results= json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            }) ;
            setResults(results);       
    })
    }
    const handleChange=(e)=>{
        setInput(e.target.value)
        fetchData(e.target.value);
    }
  return (
    <div className='input-wrapper'>
     <FaSearch id= 'search-icon'/>
     <input type="text" placeholder='Type to search...' value={input} onChange={handleChange}/>   
    </div>
  )
}

export default Search