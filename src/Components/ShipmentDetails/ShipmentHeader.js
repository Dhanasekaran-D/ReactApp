import React from 'react'
import uaeFlag from '../../assets/ae.svg'
import indFlag from '../../assets/in.svg'
import ship from '../../assets/ship.png'
import menuIcon from '../../assets/menuDots.png'
import rightArrow from '../../assets/rigtharrow.png'
import OrImg from '../../assets/orSymbol.png'
import co2 from '../../assets/Co2 Icons-05 1.png'
import { Link } from 'react-router-dom'
import Stepper  from '../ShipmentDetails/ShipmentTable/Track/Stepper'
import { Card } from 'antd'

const ShipmentHeader = () => {


  return (
    <Card
          style={{
            width: "100%",
            minWidth:"1440px"
          }}
          className='container mx-auto p-0 mb-4 mob_response'
          id='mobile_margin'
        >
            <div className="row reference_row mb-4">
                  <div className="col-6 col-lg-3">
                    <h6 className='me-2 m-0'>HBL Number:</h6>
                    <h6 className='m-0'>121014000112</h6>
                  </div>
                  <div className="col-6 col-lg-4">
                    <h6 className='m-0 me-5'>Customer Reference (PO#)</h6>
                    <h6 className='m-0'>ADK-23-1198</h6>
                  </div>
            </div>
            <div className="row destination_row mb-3">
                <div className="col-12 col-lg-7 left_column">
                    <div className="from_box">
                        <img src={uaeFlag} alt="" className="flag_img me-3" />
                        <p className='m-0'>Jebel Ali (AEJEA)</p>
                        <img src={rightArrow} alt="" className='mx-3' />
                    </div>
                    <div className="to_box">
                        <img src={indFlag} alt="" className='flag_img me-3' />
                        <p className='m-0'>Nhava Sheva (INNSA)</p>
                        <img src={OrImg} alt="" className='mx-3' />
                    </div>
                    <div className="estimate_box">
                        <img src={ship} alt="" className='me-3' />
                        <p className='m-0'>Est. T/T</p>
                        <p className='mx-2 m-0'>9 Days (5 Days Port to Port)</p>
                    </div>
                </div>
                <div className="col-12 col-lg-5 right_column">
                    <div className="bookedButton me-3">
                       <Link>Booked</Link>
                    </div>
                    <div className="menu_icon">
                      <img src={menuIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="booking_row">
                <div className="booking_content">
                  <p className='m-0 mb-1'>Booking Date</p>
                  <p className='m-0'>10 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Estimated time of Departure</p>
                  <p className='m-0'>12 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Estimated time of Arrival</p>
                  <p className='m-0'>20 May, 2023</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Mode</p>
                  <p className='m-0'>LCL</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Incoterm</p>
                  <p className='m-0 text-center'>FOB</p>
                </div>
                <div className="booking_content">
                  <p className='m-0 mb-1'>Rate is Valid Till</p>
                  <p className='m-0'>31 May, 2023</p>
                </div>
            </div>
            <div className="booking_status_row my-3">
                <div className="table-responsive">
                  <Stepper />
                </div>
            </div>
            <div className="estimated_row">
              <div className="estimated_header">
                <img src={co2} alt="" />
                <p className='m-0 mx-2'>Emissions</p>
                <p className='m-0'>Estimated:<span className='ms-2'>22 tons</span></p>
              </div>
              <div className="estimated_body">
                <p className='m-0'>Actual calculations will be available once the shipment is complete.</p>
              </div>
            </div>
        </Card>
  )
}

export default ShipmentHeader