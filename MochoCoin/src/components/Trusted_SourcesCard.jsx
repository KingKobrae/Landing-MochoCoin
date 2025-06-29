import React from 'react'

function Trusted_SourcesCard({icon, title, text, link, linkText}) {
  return (
    <>
        {icon}
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link}>{linkText}</a>
    </>
  )
}

export default Trusted_SourcesCard