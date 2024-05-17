import React, { useState } from 'react'
import ShipmentHeader from './ShipmentHeader';
import StepperColumn from './ShipmentTable/Track/StepperColumn';
import { Card } from 'antd';
import './ShipmentBase.css'

const ShipmentBase = () => {


    const tabListNoTitle = [
        {
          key: 'PendingActions',
          label: 'Pending Actions',
        },
        {
          key: 'BookingSummary',
          label: 'Booking Summary',
        },
        {
          key: 'QuoteDetails',
          label: 'Quote Details',
        },
        {
          key: 'Documents',
          label: 'Documents',
        },
        {
          key: 'Track',
          label: 'Track',
        },
    
      ];
    
      const contentListNoTitle = {
        PendingActions: <p>Pending Actions</p>,
        BookingSummary: <p>Booking Summary</p>,
        QuoteDetails: <p>Quote Details</p>,
        Documents: <p>Documents</p>,
        Track: <StepperColumn />,
      };
    
      const [activeTabKey, setActiveTabKey] = useState('track');
        const onTab2Change = (key) => {
                setActiveTabKey(key);
        };

  return (
    <div className="track_section container-fluid mx-auto mob_response" style={{marginTop:"8rem",minWidth:"1440px"}}>
        <ShipmentHeader />
        <Card
          style={{
            width:"100%",
            minWidth:"1440px"
          }}
          className='container mx-auto p-0 mb-4 mob_response'
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTab2Change}
          tabProps={{
          size: 'middle',
          }}
        >
            {contentListNoTitle[activeTabKey]}
        </Card>
    </div>
  )
}

export default ShipmentBase