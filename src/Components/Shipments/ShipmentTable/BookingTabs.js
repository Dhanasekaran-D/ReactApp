import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Input, Select, Table, Image } from "antd";
import { SearchOutlined, CaretDownFilled } from "@ant-design/icons";
import { Drawer } from "antd";
import { Dropdown, Space, Menu } from "antd";
import img1 from "../../../assets/img.png";
import calendar from "../../../assets/calendar.png";
import filter from "../../../assets/Filter 2.png";
import AllBookings from "./AllBookings";
import "../ShipBookingTabs.css";

const TabItems = [
  {
    key: "1",
    label: "All Bookings(10)",
  },
  {
    key: "2",
    label: "Pending Action(3)",
  },
  {
    key: "3",
    label: "Booked(2)",
  },
  {
    key: "4",
    label: "In-Transit(1)",
  },
  {
    key: "5",
    label: "Delivered(2)",
  },
  {
    key: "6",
    label: "Cancelled(1)",
  },
];


function BookingTabs() {
  const [visible, setVisible] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
  const [selectedTabKey, setSelectedTabKey] = useState("1");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or set your data here
    const fetchData = async () => {
      // For demonstration, setting sample data directly
      const sampleData = [
        {
          shipmentId: 2345678907,
          mode: "LCL",
          origin: "Nhava Sheva(INNSA)",
          destination: "JEBEL ALI(AEJEA)",
          bookedOn: "10/05/2024",
          etd: "11/05/2024",
          eta: "11/05/2024",
          status: "Booked",
          action: "Add Pending Details",
        },
        {
          shipmentId: 2345678907,
          mode: "LCL",
          origin: "Nhava Sheva(INNSA)",
          destination: "JEBEL ALI(AEJEA)",
          bookedOn: "10/05/2024",
          etd: "12/05/2024",
          eta: "12/05/2024",
          status: "Booked",
          action: "Add Pending Details",
        },
        // Add more data as needed
      ];
      setData(sampleData);
    };

    fetchData();
  }, []);

  const filterData = (data) => {
    switch (selectedTabKey) {
      case "1": // All Bookings
        return data; // Return all data
      case "2": // Pending Action
        return data.filter(item => item.status === "Pending"); // Filter data for pending action
      case "3": // Booked
        return data.filter(item => item.status === "Booked"); // Filter data for booked status
      // Add cases for other tabs as needed
      default:
        return data;
    }
  };

  const onChange = (key) => {
    setSelectedTabKey(key);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const items = [
    {
      label: "Past 30 Days",
      key: "1",
    },
    {
      label: "Past 15 days",
      key: "2",
    },
    {
      label: "Past 60 days",
      key: "3",
    },
  ];
  const onClick = (item) => {
    setSelectedDropdownItem(item);
    console.log("Selected item:", item);
  };

  return (
    <div
      className="mx-auto mt-5 "
      style={{
        width: "1146px",
        borderRadius: "8px",
      }}
    >
      <Row className="border" style={{ borderRadius: "8px" }}>
        <Col span={24}>
          <Row justify="space-between">
            <Col span={20}>
              <Tabs
                defaultActiveKey="1"
                items={TabItems}
                onChange={onChange}
                style={{ padding: "3px 6px 3px 4px" }}
              />
            </Col>
            <Col
              span={4}
              className="viewtab-col"
              style={{ borderBottom: "1px solid #e7eaf0" }}
            >
              <div className="viewtab-outer">
                <div className="ant-img">
                  <img src={img1} width="64px" height="32px" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row
            justify="space-between"
            className="w-full"
            style={{ padding: "10px 20px" }}
          >
            <Col>
              <Input
                placeholder="Search booking id , origin, destination... "
                prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
                style={{
                  width: "368.13px",
                  padding: "4px 11px",
                  borderRadius: "4px",
                }}
              />
            </Col>
            <Col className="d-flex">
              <div
                style={{ border: "1px solid #E7EAF0", borderRadius: "8px" }}
                className="px-1 d-flex"
              >
                <Image
                  src={calendar}
                  width="16px"
                  height="16px"
                  className="mt-2 pe-1"
                />

                <div
                  style={{
                    alignContent: "center",
                    border: "none ",
                    outline: "none ",
                  }}
                >
                  <Dropdown
                    overlayStyle={{ minWidth: '200px' }} // Adjust the width as needed
                    overlay={
                      <Menu>
                        {items.map(item => (
                          <Menu.Item key={item.key} onClick={() => onClick(item)}>
                            {item.label}
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={['click']}
                  >
                    <a
                      onClick={(e) => e.preventDefault()}
                      style={{ color: "rgba(73, 90, 110, 1)" }}
                    >
                      <Space>
                        <span
                          style={{
                            maxWidth: "160px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {selectedDropdownItem
                            ? selectedDropdownItem.label
                            : "Past 30 days"}
                        </span>
                        <CaretDownFilled style={{ marginLeft: "4px" }} />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="filter d-flex">
                <div className="ant-image cursor-pointer" onClick={showDrawer}>
                  <img
                    src={filter}
                    className="ant-image-img me-1 my-1"
                    style={{
                      verticalAlign: "baseline",
                      marginTop: "2px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                Filters
              </div>

              <Drawer
                title="Filters"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                width={400}
              ></Drawer>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
        <AllBookings filterData={filterData}  />
        </Col>
      </Row>
    </div>
  );
}

export default BookingTabs;
