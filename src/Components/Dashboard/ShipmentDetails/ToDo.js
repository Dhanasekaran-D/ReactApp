import React, { useState } from "react";
import { Typography } from "@mui/material";
import './ToDo.css';
import './shipmentDetails.css'

const ToDo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const todoData = [
    {
      id: 1,
      number: "234542123675",
      action: "Upload Document",
      route: "Nhava Sheva - Jebel Ali",
      dueDate: "20 May 2024",
      daysLeft: "4 Days Left",
    },
    {
      id: 2,
      number: "234542123675",
      action: "Upload Document",
      route: "Nhava Sheva - Jebel Ali",
      dueDate: "20 May 2024",
      daysLeft: "3 Days Left",
    },
    {
      id: 3,
      number: "234542123675",
      action: "BL Draft Review",
      route: "Nhava Sheva - Jebel Ali",
      dueDate: "20 May 2024",
      daysLeft: "3 Days Left",
    },
    {
      id: 4,
      number: "234542123675",
      action: "BL Draft Review",
      route: "Nhava Sheva - Jebel Ali",
      dueDate: "20 May 2024",
      daysLeft: "3 Days Left",
    },
  ];

  return (
    <div
      className="layout shadow p-2"
      
    >
      <div
        style={{
         
          paddingLeft: "30px",
          
        }}
        className="pt-3 pb-4"
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "23.44px",
            textAlign: "left",
          }}
        >
          Your to-Do list <span style={{color:"#B3B2BA"}}>(09)</span>
        </Typography>
      </div>
      <div className="scroll d-flex mt-2">
        <div
       
          style={{ overflowY: "auto", height: "295px", overflowX: "hidden" }}
        >
          {todoData.map((item) => (
            <div
              key={item.id}
              className="row card-row m-0 todo-row"
              style={{
                height: "99px",
                alignContent: "center",
                width: "390px",
                paddingLeft: "18px",
                paddingRight:"20px"
              }}
            >
              <div
                style={{
                  height: "81px",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: "19px",
                      color: "#29333D",
                      height: "24.53px",
                    }}
                  >
                    {item.number}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "14.68px",
                      fontWeight: "600",
                      color: "#000000",
                      textAlign: "right",
                    }}
                    className="text-end"
                  >
                    {item.action}
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      width: "198px",
                      height: "50px",
                      color: "#33343D",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "18.75px",
                      }}
                    >
                      {item.route}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16.41px",
                      }}
                    >
                      Due Date {item.dueDate}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "14.06px",
                      color: "#33343D",
                      alignSelf: "center",
                    }}
                  >
                    {item.daysLeft}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;