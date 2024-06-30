import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

// assets
import SearchIcon from 'assets/icons/search.png';

// actions
import { searchBikes } from 'store/bikes/act/actSearchBikes';

const Search = () => {

    const dispatch= useDispatch();
    const searchInput= useRef();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(searchBikes(searchInput.current.value));
        searchInput.current.value="";
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)} className='relative'>
            <input className='w-1/2 placeholder:text-white-color placeholder:text-sm 
            bg-transparent border-l border-b border-white-color rounded-xl py-2 px-4 mx-auto block outline-none' 
            type="search" name="" id="" placeholder='Search For Bikes, Eg:Hero, Or Royal'
            ref={searchInput}/>
            <button className='w-9 absolute top-1/2 right-1/4 mr-3 -translate-y-1/2 hover:scale-105' type='submit'>
                <img className='w-full' src={SearchIcon} alt="search" />
            </button>
        </form>
    )
}

export default Search