import React from 'react'

function InputCard({text, example, type}) {
  return (
    <>
        <span>{text}</span>
        <input type={type} placeholder={example}/>
    </>
  )
}

export default InputCard