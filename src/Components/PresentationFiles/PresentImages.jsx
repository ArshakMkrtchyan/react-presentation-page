import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function PresentImages() {
  const imgVal= useContext(MyContext);


  return (
    <div>
      <div className='allimgBoxes'>
        {imgVal.rightInfo.map(item => (
          <div className='imgBox'>
            <img src={item.img} alt=''/>
          </div>
        ))}
      </div>
    </div>
  )
}
