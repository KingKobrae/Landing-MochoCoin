import React from 'react'

function MiningCard({title, number, bg}) {
  return (
    <>
        <div style={{ background: bg}}>{number}</div>
        <h3>{title}</h3>
    </>
  )
}

export default MiningCard