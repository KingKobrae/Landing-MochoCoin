import React from 'react'
import { HiOutlinePhone } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

function OfficesCard({title, text1, text2, text3}) {
  return (
    <>
        <h3>{title}</h3>
        <div>
            <span><LuMapPin size={24} /> {text1}</span>
            <span><HiOutlinePhone size={24} /> {text2}</span>
            <span><MdOutlineMail size={24} /> {text3}</span>
        </div>
    </>
  )
}

export default OfficesCard