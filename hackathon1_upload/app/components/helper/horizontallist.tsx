import React from 'react'

export default function HorizontalList( { list ,tag , wrapper, style='' }) {

    const CustomTag = tag;
    const CustomWrapper = wrapper;

  return (
    <CustomWrapper className={`${style} flex justify-between mt-auto pt-4`}>
    {
      list.map( (item , index) => <CustomTag key={index} > {item} </CustomTag> )
    }
  </CustomWrapper>
  )
}
