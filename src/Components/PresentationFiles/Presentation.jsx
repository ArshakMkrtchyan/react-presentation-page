import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { MyContext } from '../Context';
import LeftSide from './LeftSide'
import Modal from './Modal'
import RightSide from './RightSide'

export default function Presentation() {
  const presentVal = useContext(MyContext);

  function handleout() {
    localStorage.removeItem('User')
  }


  return (
    <div className='presentation'>
      <h1 className='mainTitle'>Presentation</h1>
      <form action=""><button onClick={handleout} className='logOut'>Log out</button></form>
      <div className="addCont">
        <h3>Add something</h3>
        <button className='presentAdd' onClick={presentVal.styleBlock}>add</button>
      </div>
      <div className='presentContainer'>
        <>
          <LeftSide />
          <RightSide />
          <Outlet />
        </>
      </div>
      <Modal />
    </div>
  )
}
