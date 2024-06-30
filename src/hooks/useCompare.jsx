import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useCompare = (info,setCompare) => {
    const {cart}=useSelector(state=>state.cart)
    useEffect(()=>{
        if(cart.find(item=>item.id==info.id)){
            setCompare(true)
        }else{
            setCompare(false);
        }
    },[])
}

export default useCompare