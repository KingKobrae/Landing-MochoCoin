import React from 'react'

function StatsCard({icon, number, title, data}) {
  return (
    <>
        <div>
            {icon}
            <span>{number}</span>
        </div>
        
        <h3>{title}</h3>
        <span>{data}</span>
    </>
  )
}

export default StatsCard