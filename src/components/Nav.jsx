import React, { useContext, useEffect } from 'react'
import { GiFoodTruck } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';



function Nav() {
    let{input,setInput,setCate,setShowCart}=useContext(dataContext)

    useEffect(()=>{
      let newlist=food_items.filter((item)=>item.food_name.
      includes(input)||item.food_name.toLowerCase().includes(input))
      setCate(newlist)
      
    },[input, setCate])  

let items= useSelector(state=>state.cart)

  return (
    <div className='w-full  h-[100px] flex justify-between items-center px-8 md:px-8 '>
    <div className='flex justify-center items-center  w-[60px]
     h-[60px] bg-white rounded-md shadow-xl'>
      <GiFoodTruck className='w-[50px] h-[50px] text-green-500'/>
    </div>
    <form className=' w-[45%] h-[60px] bg-white flex items-center
     px-5  gap-[20px] rounded-md  shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
      <IoSearch className='w-[20px] h-[20px] text-green-500'/>
      <input type="text" placeholder="Search items..." className='p-2 w-[100%] 
      outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>

    </form>
    <div className='flex justify-center items-center 
     w-[60px] h-[60px] rounded-md bg-white shadow-xl relative'
     onClick={()=>setShowCart(true)}>
    <span className='absolute top-0 right-2  text-green-500 font-bold texr-[18px]'>{items.length}</span>
     <FaCartArrowDown className='w-[30px] h-[30px] text-green-500 cursor-pointer'/>
    </div>
    </div>
  )
}

export default Nav
