import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function PresentInfo() {
    const rsidetVal = useContext(MyContext);

    // console.log(rsidetVal.img);
    // console.log(rsidetVal.title);
    return (
        <div className='allInfoBoxes'>
            {rsidetVal.rightInfo.map(item => (
                <div  className='infoBox'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    )
}
