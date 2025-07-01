import React from 'react'

function LinksCard({icon, title, link, linktext, text}) {
  return (
    <>
        {icon}
        <div>
            <h3>{title}</h3>
            <a href={link}>{linktext}</a>
            <p>{text}</p>
        </div>
    </>
  )
}

export default LinksCard