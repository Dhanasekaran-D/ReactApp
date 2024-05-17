import React, { useState } from "react";
import { Typography } from "@mui/material";
import Marker from '../Core-Components/Marker';
import { Button, Modal } from 'antd';

const Map = () => {
  const [showDetails, setShowDetails] = useState(false); // State to manage the visibility of details
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div style={{ 
      width: "1146px",
      borderRadius: "8px",
      marginRight:'auto',
      marginLeft:'auto'
     }} className="mx-auto mt-1">
      
      {/* Embed Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65274534.95197871!2d-95.71289153649903!3d37.09024099420497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715144379989!5m2!1sen!2sus"
        width="100%"
        height="287px"
        style={{ border: "0", position:'relative' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map"
        frameBorder="0"
      ></iframe> 
      
      {/* Marker */}
      <Marker position={{ top: "40%", left: "50%" }} onClick={handleMarkerClick} label="2" />
      
      <Modal title="Basic Modal" visible={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}>
        <table>
          
        </table>
      </Modal>
    </div>
  );
};

export default Map;
