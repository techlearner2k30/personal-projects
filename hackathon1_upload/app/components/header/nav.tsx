import React from 'react'

const navList = ["Female", "Male" , "Kids" , "All Products"]

export default function Nav () {


  return (
    <ul className='flex justify-evenly gap-8'>
      {
        navList.map( (item,index) => <li key={index}> {item} </li> )
      }
    </ul>
  )
}
