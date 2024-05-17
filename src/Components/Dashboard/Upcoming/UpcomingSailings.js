import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {ReactComponent as Location} from '../../../assets/location.svg'
import { ReactComponent as India} from '../../../assets/in.svg'
import { ReactComponent as AE} from '../../../assets/ae.svg'
import LeftLine  from '../../../assets/leftLine.png'
import RightLine  from '../../../assets/rightLine.png'




const UpcomingSailings = () => {
  const [selectedVolume, setSelectedVolume] = useState(null);
  const volume = [{ name: "LCL" }, { name: "FCL" }, { name: "Air" }];
  return (
    <div
      className="w-100 mt-5 shadow mx-auto"
      style={{
        minWidth: "1269px",
        borderRadius: "8px",
      }}
    >
      <div
        className=" w-100 d-flex justify-content-between sailing-heading "
        style={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid #E7EAF0",
          padding: "0 20px 0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            className=" "
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Upcoming Sailings
          </Typography>{" "}
          <div
            className="d-flex my-2 rounded-1 "
            style={{
              border: "1px solid #E7EAF0",
              padding: "6px 10px",
              justifyContent: "space-between",
              background: "white",
            }}
          >
            <Location
              className="pt-1"
              style={{ width: "22px" }}
            />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "13px",
                color: "#495A6E",
                padding: "3px",
              }}
            >
              Origin:{" "}
            </Typography>
            <input
              type="text"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontWeight: "400",
                fontSize: "13px",
              }}
              placeholder="Enter Port"
              className="placeholder-color"
            />
            <ArrowDropDownIcon />
          </div>
          <div
            className="d-flex my-2 rounded-1 "
            style={{
              border: "1px solid #E7EAF0",
              padding: "6px 10px",
              justifyContent: "space-between",
              background: "white",
            }}
          >
            <Location
              className="pt-1"
              style={{ width: "22px" }}
            />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "13px",
                color: "#495A6E",
                padding: "3px",
              }}
            >
              Destination:{" "}
            </Typography>
            <input
              type="text"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontWeight: "400",
                fontSize: "13px",
              }}
              placeholder="Enter Port"
              className="placeholder-color"
            />
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="dropdown my-2" style={{ width: "5%", float: "left" }}>
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            LCL
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">LCL</li>
            <li className="dropdown-item">FCL</li>
            <li className="dropdown-item">Air</li>
          </ul>
        </div>
      </div>
      <div>
        <Accordion
          sx={{
            padding: "20px",
            border: "none",
            borderBottom: "1px solid #F3F5F7",
          }}
          className="mx-2 acc-row"
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ border: "none" }}
          >
            <div className="d-flex w-100">
              <div style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  15 June, 2023{" "}
                </Typography>
                <div className="d-flex ">
                  <India
                    alt="ind"
                    width={20}
                    className="me-1"
                  /><Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "#495A6E",
                  }}
                >
                  Nhava Sheva (INNSA)
                </Typography>
                </div>
              </div>
              <div style={{width:'60%'}} >
                <div className="d-flex justify-content-around">
                <div className=" d-flex flex-direction-row">
                  <div>
                    <img
                      src={LeftLine}
                      width="257px"
                      height="10px"
                    />
                  </div>
                </div>
                <div className=" text-start my-1 px-2">
                  <Typography
                    sx={{ opacity: "0.7", fontSize: "14px" }}
                    className="fw-bold "
                  >
                    T/T : 10 days
                  </Typography>
                </div>
                <div>
                  <img src={RightLine}
                    width="257px"
                    height="10px"
                  />
                </div>
                </div>
              </div>
              <div className=" " style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  20 Jue 2023
                </Typography>
               <div className="d-flex">
                  <AE
                    alt="ind"
                    width={20}
                    className="me-2"
                  /> <Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Jebel Ali (AEJEA)
                </Typography></div>
              </div>
              <button
                className="book-now justify-content-end align-content-center ms-2 me-0"
                style={{
                  backgroundColor: "#F01E1E",
                  padding: "0 8px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                }}
              >
                Book Now
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography className="fw-semibold">VESSEL</Typography>
                <Typography className="fw-bolder">X_PRESS ALTAIR</Typography>
              </div>

              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>VOYAGE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>TRANSIT TIME</Typography>
              </div>
            </div>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>CUT OFF DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>DEPARTURE DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>ARRIVAL DATE</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        
      </div>
      <div>
      <Accordion
          sx={{
            padding: "20px",
            border: "none",
            borderBottom: "1px solid #F3F5F7",
          }}
          className="mx-2 acc-row"
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            
            sx={{ border: "none" }}
          >
            <div className="d-flex w-100">
              <div style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  15 June, 2023{" "}
                </Typography>
                <div className="d-flex ">
                  <India
                    alt="ind"
                    width={20}
                    className="me-1"
                  /><Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "#495A6E",
                  }}
                >
                  Nhava Sheva (INNSA)
                </Typography>
                </div>
              </div>
              <div style={{width:'60%'}} >
                <div className="d-flex justify-content-around">
                <div className=" d-flex flex-direction-row">
                  <div>
                    <img
                      src={LeftLine}
                      width="257px"
                      height="10px"
                    />
                  </div>
                </div>
                <div className=" text-start my-1 px-2">
                  <Typography
                    sx={{ opacity: "0.7", fontSize: "14px" }}
                    className="fw-bold "
                  >
                    T/T : 10 days
                  </Typography>
                </div>
                <div>
                  <img src={RightLine}
                    width="257px"
                    height="10px"
                  />
                </div>
                </div>
              </div>
              <div className=" " style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  20 Jue 2023
                </Typography>
               <div className="d-flex">
                  <AE
                    alt="ind"
                    width={20}
                    className="me-2"
                  /> <Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Jebel Ali (AEJEA)
                </Typography></div>
              </div>
              <button
                className="book-now justify-content-end align-content-center ms-2 me-0"
                style={{
                  backgroundColor: "#F01E1E",
                  padding: "0 8px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                }}
              >
                Book Now
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography className="fw-semibold">VESSEL</Typography>
                <Typography className="fw-bolder">X_PRESS ALTAIR</Typography>
              </div>

              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>VOYAGE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>TRANSIT TIME</Typography>
              </div>
            </div>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>CUT OFF DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>DEPARTURE DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>ARRIVAL DATE</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
      <Accordion
          sx={{
            padding: "20px",
            border: "none",
            borderBottom: "1px solid #F3F5F7",
          }}
          className="mx-2 acc-row"
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
      
            sx={{ border: "none" }}
          >
            <div className="d-flex w-100">
              <div style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  15 June, 2023{" "}
                </Typography>
                <div className="d-flex ">
                  <India
                    alt="ind"
                    width={20}
                    className="me-1"
                  /><Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "#495A6E",
                  }}
                >
                  Nhava Sheva (INNSA)
                </Typography>
                </div>
              </div>
              <div style={{width:'60%'}} >
                <div className="d-flex justify-content-around">
                <div className=" d-flex flex-direction-row">
                  <div>
                    <img
                      src={LeftLine}
                      width="257px"
                      height="10px"
                    />
                  </div>
                </div>
                <div className=" text-start my-1 px-2">
                  <Typography
                    sx={{ opacity: "0.7", fontSize: "14px" }}
                    className="fw-bold "
                  >
                    T/T : 10 days
                  </Typography>
                </div>
                <div>
                  <img src={RightLine}
                    width="257px"
                    height="10px"
                  />
                </div>
                </div>
              </div>
              <div className=" " style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  20 Jue 2023
                </Typography>
               <div className="d-flex">
                  <AE
                    alt="ind"
                    width={20}
                    className="me-2"
                  /> <Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Jebel Ali (AEJEA)
                </Typography></div>
              </div>
              <button
                className="book-now justify-content-end align-content-center ms-2 me-0"
                style={{
                  backgroundColor: "#F01E1E",
                  padding: "0 8px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                }}
              >
                Book Now
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography className="fw-semibold">VESSEL</Typography>
                <Typography className="fw-bolder">X_PRESS ALTAIR</Typography>
              </div>

              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>VOYAGE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>TRANSIT TIME</Typography>
              </div>
            </div>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>CUT OFF DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>DEPARTURE DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>ARRIVAL DATE</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
      <Accordion
          sx={{
            padding: "20px",
            border: "none",
            borderBottom: "1px solid #F3F5F7",
          }}
          className="mx-2 acc-row"
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ border: "none" }}
          >
            <div className="d-flex w-100">
              <div style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  15 June, 2023{" "}
                </Typography>
                <div className="d-flex ">
                  <India
                    alt="ind"
                    width={20}
                    className="me-1"
                  /><Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "#495A6E",
                  }}
                >
                  Nhava Sheva (INNSA)
                </Typography>
                </div>
              </div>
              <div style={{width:'60%'}} >
                <div className="d-flex justify-content-around">
                <div className=" d-flex flex-direction-row">
                  <div>
                    <img
                      src={LeftLine}
                      width="257px"
                      height="10px"
                    />
                  </div>
                </div>
                <div className=" text-start my-1 px-2">
                  <Typography
                    sx={{ opacity: "0.7", fontSize: "14px" }}
                    className="fw-bold "
                  >
                    T/T : 10 days
                  </Typography>
                </div>
                <div>
                  <img src={RightLine}
                    width="257px"
                    height="10px"
                  />
                </div>
                </div>
              </div>
              <div className=" " style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "15px", lineHeight: "22px" }}
                >
                  20 Jue 2023
                </Typography>
               <div className="d-flex">
                  <AE
                    alt="ind"
                    width={20}
                    className="me-2"
                  /> <Typography
                  sx={{
                    opacity: "0.7",
                    fontSize: "13px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Jebel Ali (AEJEA)
                </Typography></div>
              </div>
              <button
                className="book-now justify-content-end align-content-center ms-2 me-0"
                style={{
                  backgroundColor: "#F01E1E",
                  padding: "0 8px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                }}
              >
                Book Now
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography className="fw-semibold">VESSEL</Typography>
                <Typography className="fw-bolder">X_PRESS ALTAIR</Typography>
              </div>

              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>VOYAGE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>TRANSIT TIME</Typography>
              </div>
            </div>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>CUT OFF DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography>DEPARTURE DATE</Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography>ARRIVAL DATE</Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      
      <div
        className="card-footer p-3"
        style={{
          fontSize: "14px",
          fontWeight: "400",
          backgroundColor: "#F8FAFC",
        }}
        role="button"
      >
        Show More
      </div>
    </div>
  );
};

export default UpcomingSailings;
