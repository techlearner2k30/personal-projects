import React from 'react'

export default function VerticalList({ list ,tag , wrapper, style='', heading='' }) {
    const CustomTag = tag;
    const CustomWrapper = wrapper;
    //const heading1 = heading != '' && <h2>{heading}</h2>

  return (
      <CustomWrapper className={`${style} flex flex-col justify-center`}>
      {
        list.map( (item , index) => <CustomTag key={index} > {item} </CustomTag> )
      }
      </CustomWrapper>
  )
}
