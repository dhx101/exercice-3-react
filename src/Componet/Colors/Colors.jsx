import React from 'react'

const Colors = ({colors}) => {
  return (
    <div>
    {colors.map((item,index)=> (
        <img src='' alt={item} key={index}></img>
    ))}
      
    </div>
  )
}

export default Colors
