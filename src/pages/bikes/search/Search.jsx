import React from 'react';

// assets
import SearchIcon from 'assets/icons/search.png';

const Search = () => {
    return (
        <div className='relative'>
            <input className='w-1/2 placeholder:text-white-color placeholder:text-sm 
            bg-transparent border-l border-b border-white-color rounded-xl py-2 px-4 mx-auto block outline-none' 
            type="search" name="" id="" placeholder='Search For Bikes, Eg:Hero, Or Royal'/>
            <img className='cursor-pointer w-9 absolute top-1/2 right-1/4 mr-3 -translate-y-1/2 hover:scale-105' src={SearchIcon} alt="" />
        </div>
    )
}

export default Search