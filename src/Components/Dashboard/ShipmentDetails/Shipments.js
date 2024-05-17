import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./shipmentDetails.css";
import { Link } from "react-router-dom";
import RecentBooking from "../../QuickBooking/RecentBooking";
import { Dropdown } from "primereact/dropdown";
import ShipmentHistory from "../ShipmentHistory/ShipmentHistory";
import ToDo from "./ToDo";
import Inbox from "./Inbox";
import '../ShipmentDetails/shipmentDetails.css'

const Shipments = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ["Last 7 days", "Last 15 days", " Last 30 days"];

  const handleDropdownChange = (e) => {
    setSelectedItem(e.value);
  };
  const handleModalOpen = () => {
    setIsShowModal(true);
  };
  
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleClickNewRequests = () => {
    setSelectedStatus("New Requests");
        console.log(selectedStatus)
  };
  const handleClickBooked = () => {
    setSelectedStatus("Booked");
  };
  const handleClickArrived = () => {
    setSelectedStatus("Arrived");
  };
  const handleClickDeparted = () => {
    setSelectedStatus("Departed");
  };
  const handleClickReceived = () => {
    setSelectedStatus("Received");
  };
  const handleClickDelivered = () => {
    setSelectedStatus("Delivered");
  };
  const handleShipmentsClick = () => {
    setSelectedStatus("Shipments");
    console.log(selectedStatus)
  };
  return (
    <div className="d-flex flex-column">
      <div className="d-flex w-100 justify-content-between" style={{
        minWidth: "1269px",
        borderRadius: "8px",
      }}>
      <div className="layout shadow p-3 ">
        <div className="row pb-1 px-1">
          <div className="col ">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", padding: "8px" }} role = "button" onClick={handleShipmentsClick}>
                <Typography className="bold heading " >Shipments {" "}
                <span style={{color:"#B3B2BA"}}>(26)</span></Typography>
              </Box>
              <div style={{ alignContent: "center" }} className="px-2">
                <Dropdown
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.value)}
                  options={items}
                  placeholder="Last 7 days"
                  className="w-full md:w-14rem "
                />
              </div>
            </Box>
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(230, 230, 230, 1)",
            borderRadius: "7px",
            backgroundColor:'#FAFAFD'
          }}
          className="shipments-layout p-3 mx-auto mt-4"
        >
          <div className="w-100 d-flex">
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "New Requests" ? "selected" : ""}`}
              role="button"
              style={{
                borderRight: "1px solid rgba(30, 41, 59, 0.1)",
                borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
              }}
              onClick={handleClickNewRequests}
             
            >
              <Typography className="bold text-start" sx={{ fontSize: "20px" }}>
                4
              </Typography>
              <Typography
                className="text-start"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                New Requests
              </Typography>
            </div>
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "Booked" ? "selected" : ""}`}
              style={{
                borderLeft: "1px solid rgba(30, 41, 59, 0.1)",
                borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
              }}
              role="button"
              onClick={handleClickBooked}
            >
              <Typography className="bold text-start px-3" sx={{ fontSize: "20px" }}>
                5
              </Typography>
              <Typography
                className=" text-start px-3"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                Booked
              </Typography>
            </div>
          </div>
          <div className="w-100 d-flex">
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "Received" ? "selected" : ""}`}
              role="button"
              style={{
                borderRight: "1px solid rgba(30, 41, 59, 0.1)",
                borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
              }}
              onClick={handleClickReceived}
            >
              <Typography
                className="bold text-start "
                sx={{ fontSize: "20px" }}
              >
                6
              </Typography>
              <Typography
                className=" text-start"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                Recieved
              </Typography>
            </div>
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "Departed" ? "selected" : ""}`}
              role="button"
              style={{
                borderLeft: "1px solid rgba(30, 41, 59, 0.1)",
                borderBottom: "1px solid rgba(30, 41, 59, 0.1)",
              }}
              onClick={handleClickDeparted}
            >
              <Typography className="bold text-start px-3" sx={{ fontSize: "20px" }}>
                5
              </Typography>
              <Typography
                className="text-start px-3"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                Departed
              </Typography>
            </div>
          </div>
          <div className="w-100 d-flex mb-4">
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "Arrived" ? "selected" : ""}`}
              role="button"
              style={{ borderRight: "1px solid rgba(30, 41, 59, 0.1)" }}
              onClick={handleClickArrived}
            >
              <Typography className="bold text-start" sx={{ fontSize: "20px" }}>
                4
              </Typography>
              <Typography
                className="bold text-start"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                Arrived
              </Typography>
            </div>
            <div
              className={`w-50 card-row shipment-col p-2 align-content-center ${selectedStatus === "Delivered" ? "selected" : ""}`}
              role="button"
              style={{ borderLeft: "1px solid rgba(30, 41, 59, 0.1)" }} onClick={handleClickDelivered}
            >
              <Typography className="bold text-start px-3" sx={{ fontSize: "20px" }}>
                2
              </Typography>
              <Typography
                className="bold text-start px-3"
                sx={{ fontSize: "14px", fontWeight: "500" }}
              >
                Delivered
              </Typography>
            </div>
          </div>
        </div>
        {/* <RecentBooking show={isShowModal} onClose={() => setIsShowModal(false)} /> */}
      </div>
      <ToDo/>
      <Inbox />
      </div>
      <div className=" w-100">
        <ShipmentHistory
         selectedStatus={selectedStatus}
        />
      </div>
    </div>
  );
};

export default Shipments;
