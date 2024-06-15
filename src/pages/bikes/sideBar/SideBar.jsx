import React, { useState } from 'react'

// assets
import Ascending from 'assets/icons/ascending.png';
import Descending from 'assets/icons/descending.png';

const SideBar = () => {

    const [filterActive, setFilterActive]=useState(false);
    const [sortMode, setSortMode] = useState("desc");

    return (
        <aside className="h-full border px-4 rounded-md py-8">
            <div className="flex justify-between items-center gap-4 font-semibold">
                <h3 className="text-lg">Sort</h3>
                <img onClick={()=>{
                    setSortMode(sortMode==="asc"?"desc":"asc");
                }}
                className='w-5 cursor-pointer hover:animate-bounce transition' src={sortMode==="asc"?Ascending:Descending} alt="" />
            </div>
            <hr  className="my-4"/>
            <div className="flex justify-between items-center gap-4 font-semibold">
                <h3 className="text-lg">Filter</h3>
                <span onClick={()=>setFilterActive(!filterActive)} className="text-2xl cursor-pointer text-gray-600 transition">
                    {filterActive?"-":"+"}
                </span>
            </div>
            <ul className={`pl-4 ${filterActive?'hidden':'block'} transition`}>
                <li className='flex items-center gap-2 my-3'>
                    <input
                    className='scale-125 leading-none' type="checkbox" name="Bajaj" id="Bajaj"/>
                    <label className='text-lg capitalize' htmlFor="">Bajaj</label>
                </li>
                <li className='flex items-center gap-2 my-3'>
                    <input
                    className='scale-125 leading-none' type="checkbox" name="Hero" id="Hero"/>
                    <label className='text-lg capitalize' htmlFor="">Hero</label>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar