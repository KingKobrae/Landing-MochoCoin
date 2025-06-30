import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function BlogCard({url, date, time, title, text, author, link}) {
  return (
    <>
        <img src={url} alt="" />

        <div>
            <span><CiCalendar size={25} color='#333333A3'/> {date}</span>
            <span><RxPerson size={25} color='#333333A3'/> {time}</span>
        </div>

        <h3>{title}</h3>
        <p>{text}</p>

        <div>
            <span>{author}</span>
            <a href={link}>Leer Más <HiOutlineArrowNarrowRight size={30}/></a>
        </div>
    </>
  )
}

export default BlogCard