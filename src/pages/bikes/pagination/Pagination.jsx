import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// actions
import { changeCurrent, paginationList } from 'store/pagination/paginationSlice';


const Pagination = () => {

    const dispatch=useDispatch();
    const {bikes}=useSelector(state=>state.bikes);
    const {pagination,current}=useSelector(state=>state.pagination);

    useEffect(() => {
        bikes.length && dispatch(paginationList(bikes));
    }, [dispatch, bikes]);

    return (
        <div className="flex justify-center items-center gap-4 pt-12">
            {pagination && pagination.map(page=>{
                return(
                    <button key={page} onClick={()=>{
                    dispatch(changeCurrent(page))
                    window.scrollTo({top: 0, behavior:"smooth"});
                }} className={`font-semibold text-2xl px-3 rounded-lg ${page==current?"bg-blue text-black-color":"bg-gray"}`}>
                    {page}</button>
                )
            })}
        </div>
    )
}

export default Pagination