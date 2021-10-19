import React, { ReactElement } from 'react'
import '../styles/Loader.css'
export default function Loader(): ReactElement {
  return (
    <div className='loader'>
      <div className='loader__container'></div>
    </div>
  )
}
