import React from 'react'
import { NavLink } from 'react-router-dom';

const Pagenation = () => {
    return (
        <div className="flex justify-center items-center gap-4 pt-12">
            <NavLink onClick={()=>{window.scrollTo({top: 0, behavior:"smooth"});}} to={`/bikes/1`}>
                <button className="font-semibold text-2xl px-3 bg-gray rounded-lg">1</button>
            </NavLink>
        </div>
    )
}

export default Pagenation