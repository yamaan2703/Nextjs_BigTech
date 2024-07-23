import React from 'react'
import { FaRegCreditCard } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaUnlockAlt } from "react-icons/fa";

function Cards() {
    const cardItems = [
        {
          icon: <FaRegCreditCard />,
          head: "Mobile Payment make easy",
          text: "Add new. trending and rare artwork to your collections"  
        },
        {
            icon: <FaIdCard />,
            head: "Life time Transistation",
            text: "Add new. trending and rare artwork to your collections"  
          },
          {
            icon: <AiOutlineFileProtect />,
            head: "Security & Control over money",
            text: "Add new. trending and rare artwork to your collections"  
          },
          {
            icon: <FaUnlockAlt />,
            head: "Protect & Identity",
            text: "Add new. trending and rare artwork to your collections"
          },
    ]
  return (
    <div className='text-white grid grid-cols-4 gap-5'>
        {cardItems.map((item:any,index:number) => (
            <div className='border border-gray-800 p-5 rounded-lg'>
                <div className='flex justify-start items-center border'>
                    <div className='text-3xl text-[#00c4f4] p-3 rounded-full border-2'>
                    {item.icon}
                    </div>
                </div>
                <div>
                    <h1>{item.head}</h1>
                    <p>{item.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards