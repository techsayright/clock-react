import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [time , setTime] = useState()
    console.log('time');
    useEffect(()=>{
        setInterval(()=>{
            let time = new Date().toLocaleTimeString();
            setTime(time)
         },1000)
    })
    return (
        <div style={{textAlign: 'center', fontSize: '5rem'}}>{time || "Getting Time..."}</div>
    )
}
