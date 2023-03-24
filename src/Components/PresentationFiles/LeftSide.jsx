import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftSide() {
  return (
    <div className='leftSide'>
      <nav>
        <NavLink to={'PresentInfo'}> All information</NavLink>
        <NavLink to={'PresentImages'}> Only images</NavLink>
      </nav>

    </div>
  )
}
