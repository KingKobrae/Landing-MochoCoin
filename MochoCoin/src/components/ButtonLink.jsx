import React from 'react'

function ButtonLink({link, text, textColor, bColor, bg}) {
  return (
    <a href={link} style={{ color: textColor, background: bg, borderColor: bColor }}>{text}</a>
  )
}

export default ButtonLink