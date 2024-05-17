import React, {useState} from "react";
import {
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Dropdown } from 'primereact/dropdown';

const Inbox = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ["Last 7 days", "Last 15 days", " Last 30 days"];

  const handleDropdownChange = (e) => {
    setSelectedItem(e.value);
  };
  return (
    <div className="layout shadow p-3">
      <div className="">
        <div className="row ">
          <div className="col ">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", padding: "8px" }}>
                <Typography className="bold heading ">Inbox{" "}
                <span style={{color:"#B3B2BA"}}>(18)</span>
                </Typography>
              </Box>
              <div style={{alignContent:'center'}} className="px-2">
             <Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
                placeholder="Last 7 days" className="w-full md:w-14rem " />
                </div>
              {/* <Dropdown/> */}
            </Box>
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(230, 230, 230, 1)",
            borderRadius: "7px",  backgroundColor:'#FAFAFD'
          }}
          className="shipments-layout mt-4 p-4 mx-2 "
        >
          {/* <div className="mx-2">
          <hr style={{transform:'rotate(90deg)', height:'30%'}} /></div> */}
          <Typography
            sx={{ fontSize: "16px", fontWeight: "700", lineHeight: "18.75px" }}
            className="text-start"
          >
            Notifications
          </Typography>

          <div className="w-100 mt-4  d-flex">
            <div className="w-50 p-2 card-row mb-2">
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "23.44px",
                }}
              >
                10
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "16.41px",
                }}
              >
                ETD Updated
              </Typography>
            </div>
            <div className="vertical-line" style={{width:'1px', background:'rgba(30, 41, 59, 0.1)'}}/>
            <div
             className="w-50 px-4 card-row mb-2 p-2"
               //style={{ borderLeft: "1px solid rgba(30, 41, 59, 0.1)" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "23.44px",
                }}
              >
                15
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "16.41px",
                }}
              >
                ETA Updated
              </Typography>
            </div>
          </div>
          
          <Typography
            sx={{ fontSize: "16px", fontWeight: "700", lineHeight: "18.75px" }}
            className="text-start mt-2"
          >
            Messages
          </Typography>

          <div className="w-100 mt-4 d-flex">
            <div
            className="w-50 p-2 card-row mb-2"
               style={{ borderRight: "1px solid rgba(30, 41, 59, 0.1)" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "23.44px",
                }}
              >
                20
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "16.41px",
                }}
              >
                Messages
              </Typography>
            </div>
            <div className="vertical-line" style={{width:'1px', background:'rgba(30, 41, 59, 0.1)'}}/>

            <div
              className="w-50 px-4 card-row mb-2 p-2"
               //style={{ borderLeft: "1px solid rgba(30, 41, 59, 0.1)" }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "23.44px",
                }}
              >
                10
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "16.41px",
                }}
              >
                Unread
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
