import React from 'react'

export default function Product( { imgUrl , title , price , textStyle , wrapperstyle}) {
  return (
        <div className={wrapperstyle}>
          <img src={`./assets/${imgUrl}`} alt={title} />
          <h3 className={textStyle}>{title}</h3>
          <h3 className={textStyle}>$ {price}</h3>
        </div>
  )
}

