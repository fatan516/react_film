import React, { Component } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FollowUs(){
    return(
       <div className='flex gap-3 mt-4 items-center text-slate-200' dir='rtl'>
        <ul className='flex gap-1'>
            <li className='hover:text-rose-300'><a href=""><FaFacebook size={17}/></a></li>
            <li className='hover:text-rose-300'><a href=""><FaInstagram  size={17}/></a></li>
            <li className='hover:text-rose-300'><a href=""></a><FaTwitter size={17} />
            </li>
            <li className='hover:text-rose-300'><a href=""><FaTwitter size={17} />
            </a></li>
        </ul><span>:Follow Us</span>
        
       </div>
    )
}


