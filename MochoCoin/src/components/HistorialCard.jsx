import React from 'react'

function HistorialCard({date, number}) {
  return (
    <>
        <p>{date}</p>
        <span>{number}</span>
    </>
  )
}

export default HistorialCard