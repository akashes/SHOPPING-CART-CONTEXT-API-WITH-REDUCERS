// import React from 'react'

// const Filter = () => {
//   return (
//     <div className='  w-[22%] bg-white p-4 rounded-md shadow-md flex flex-col gap-4 h-[100vh]'>
//         <h2 className='text-2xl font-semibold'>Filter Products</h2>

//         <form action="" className='flex flex-col gap-4'>
//             <label htmlFor="grp1" className='flex items-center gap-2'>
//                 <input type="radio" value={'ascending'} />
//             Ascending
//             </label>
//             <label htmlFor="grp1">
//                 <input type="radio" value={'descending'} />
//             Descending
//             </label>

//             <button>Clear Filters</button>
//         </form>
      
//     </div>
//   )
// }

// export default Filter

import React from 'react'
import { useState } from 'react'

//icons
import { IoHomeOutline, IoLogoBuffer } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import { TbReportSearch } from 'react-icons/tb'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineQuestion, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaFilter } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import FilterOptions from './FilterOptions'


const menuItems=[
    { name: 'Home', icon: <IoHomeOutline size={20} />, link: '/' },
    { name: 'Cart', icon: <RiShoppingCart2Fill size={20} />, link: '/cart' },

]

const Filter = () => {


    const[open,setOpen]=useState(false)
  return (


    <nav className={`h-30vh shadow-md sm:h-screen  flex flex-col duration-500 bg-teal-600 text-white ${open ? 'w-[90vw] m-3 rounded-xl p-1  sm:w-60 sm:m-0 sm:rounded-none ':'w-10  sm:w-16 rounded-lg m-3 sm:m-0 sm:rounded-none p-1 sm:p-0'}  `}>
{/* header */}


<div className='flex  items-center  p-2'>
    <AiOutlineMenu  className={`text-sm sm:text-3xl  duration-500 cursor-pointer ${open && 'rotate-180'}`} onClick={()=>setOpen(!open)}/>
</div>

{/* body */}
<div className='flex-1'>
<ul className='hidden sm:block min-h-[20vh]'>
    {
        menuItems.map((item,index)=>(
            <li key={index} className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-500 cursor-pointer flex gap-2 items-center relative group'>
                <Link to={item.link} >
                <div>{item.icon}</div>
                </Link>
                <p className={`${!open && 'translate-x-24 w-5 hidden'} duration-500 overflow-hidden`}>{item.name}</p>

                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 `}>
                    {item.name}
                </p>
            </li>
        ))
        
    }
</ul>
<hr />
<div  onClick={()=>setOpen(!open)} className=' px-1 sm:px-3 py-1  sm:py-2 my-0 sm:my-2 hover:bg-blue-800 rounded-md duration-500 cursor-pointer flex gap-2  items-center relative group'>
                <div  ><FaFilter className='text-md sm:text-2xl ' /></div>
                <p className={`${!open && 'translate-x-24 w-5'} duration-500 overflow-hidden`}>Filter</p>

                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 `}>
                    Filter
                </p>
            </div>
            <div className='flex justify-center items-center'>
            <FilterOptions  open={open} />
            </div>
                
            

</div>
{/* footer`` */}

<div className='hidden sm:flex items-center justify-center  gap-2 px-3 py-2 '>
    <div >
        <FaUserCircle size={30} className={`duration-500 overflow-hidden`} />
    </div>
   <div className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden'}`}>
   <p>Company Name</p>
   <span className='text-xs'>companyName@gmail.com</span>
   </div>

</div>

    </nav>

  )
}

export default Filter