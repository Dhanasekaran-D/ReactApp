import React, { useState } from 'react'
import './Stepper.css'

const Stepper = () => {

  const steps = [
    {
        step:'Booking Created',
        body:'(01/05/2023)'
    },
    {
        step:'Cargo Picked up',
        body:'--'
    },
    {
        step:'Cargo Received',
        body:'(01/05/2023)'
    },
    {
        step:'Shipment Departed',
        body:'--'
    },
    {
        step:'Shipment Departed',
        body:'--'
    },
    
]

 const [activeYellow,setActiveYellow] = useState(2)
 const [activeGreen,setActiveGreen] = useState(1)


  return (
    <div className='stepper d-flex justify-content-between' >
        {
            steps?.map((step,i)=>(
                <div key={i} className={`step-item ${activeYellow===i+1 && "active_yellow"} ${activeGreen===i+1 && 'active'}`}>
                    <p className='m-0 step mb-2'>
                        <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}></div>
                    </p>
                    <p className='m-0' style={{color:"#181E25"}}>{step.step}</p>
                    <p className='m-0' >{step.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Stepper