import React from 'react'

export default function HorizontalListIcons( { list ,tag , wrapper, style='' , childStyle='' }) {

    const CustomTag = tag;
    const CustomWrapper = wrapper;

  return (
    <CustomWrapper className={`${style}`}>
    {
      list.map( (item , index) => <CustomTag key={index} className={childStyle}> {item.icon} </CustomTag> )
    }
  </CustomWrapper>
  )
}
