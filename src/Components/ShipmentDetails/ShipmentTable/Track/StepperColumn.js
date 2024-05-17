import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

const StepperColumn = () => {

    const steps = [
        {
            step:'Booking Created',
            body:'Booking done on 11/05/2023 at 02:20 PM'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Picked up',
            body:'Cargo will be Picked up  on 13/05/2023.'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        {
            step:'Cargo Received',
            body:'Cargo will be ready for shipping on 15/05/2023'
        },
        
        
    ]

    const [activeYellow,setActiveYellow] = useState(2)
    const [activeGreen,setActiveGreen] = useState(1)

  return (
    <div className='stepper_column d-flex flex-column justify-content-between' style={{maxWidth:"1400px"}}>
        {
            steps?.map((step,i)=>(
                <div className='d-flex flex-row step-item py-3'>
                     <div key={i} className={`me-5 ${activeYellow===i+1 && "active_yellow"} ${activeGreen===i+1 && 'active'}`} style={{zIndex:"1"}}>
                        <p className='m-0 step'>
                            {
                                activeGreen==i+1?<TiTick size={20} color='white' />:
                            
                            <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}>
                                
                            </div>
                            }
                        </p>
                    </div>
                    <div className="step_body">
                        <p className='m-0' style={{color:"#181E25"}}>{step.step}</p>
                        <p className='m-0' >{step.body}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default StepperColumn