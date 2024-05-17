import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CloseIcon from "@mui/icons-material/Close";
import "./ShipmentHistory.css";
import sort from "../../../assets/sort.png";
import { ReactComponent as India } from "../../../assets/in.svg";
import { ReactComponent as AE } from "../../../assets/ae.svg";
import Pagination from "../../Core-Components/Pagination";

const ShipmentHistory = ({ selectedStatus }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [selectedButton, setSelectedButton] = useState(null);
 

  const [data, setData] = useState([
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
    {
      shipmentId: 2345678907,
      mode: "LCL",
      origin: "Nhava Sheva(INNSA)",
      destination: "JEBEL ALI(AEJEA)",
      bookedOn: "10/05/2024",
      etd: "13/05/2024",
      eta: "13/05/2024",
      status: "Booked",
      action: "Add Pending Details",
    },
    {
      shipmentId: 2345678907,
      mode: "LCL",
      origin: "xhava Sheva(INNSA)",
      destination: "JEBEL ALI(AEJEA)",
      bookedOn: "10/05/2024",
      etd: "14/05/2024",
      eta: "14/05/2024",
      status: "Booking In Progress",
      action: "Add Pending Details",
    },
    {
      shipmentId: 2345678907,
      mode: "LCL",
      origin: "Nhava Sheva(INNSA)",
      destination: "JEBEL ALI(AEJEA)",
      bookedOn: "10/05/2024",
      etd: "19/05/2024",
      eta: "12/05/2024",
      status: "Cargo Picked Up",
      action: "Add Pending Details",
    },
  ]);
// table visible
const [tableVisible, setTableVisible] = useState(true); // State to toggle table visibility

const handleToggleTable = () => {
  setTableVisible(false);
};
  console.log(selectedStatus)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on selected status
    let filteredData = [];
    if (selectedStatus === "New Requests") {
      filteredData = data.filter((item) => item.status === "Booking In Progress");
      setTableVisible(true);

    } else if (selectedStatus === "Booked") {
      filteredData = data.filter((item) => item.status === "Booked");
      setTableVisible(true);

    } else if (selectedStatus === "Delivered") {
      filteredData = data.filter((item) => item.status === "Cargo Picked Up");
      setTableVisible(true);

    } 
    else if (selectedStatus === "Shipments") {
      filteredData = data;
      setTableVisible(true);
    } 
    else {
      filteredData = data;
    }
    setFilteredData(filteredData);
  }, [selectedStatus, data]);

   const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

  // Extract the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const actionBodyTemplate = (rowData) => {
    let buttonLabel;
    let btnClass;
    if (rowData.status === "Booked") {
      buttonLabel = "Add Pending Details";
    } else if (rowData.status === "Booking In Progress") {
      buttonLabel = "-";
    } else if (rowData.status === "Cargo Picked Up") {
      buttonLabel = "Track";
      btnClass = "cargo-picked-up";
    }
    return (
      <Button
        outlined
        className={btnClass}
        style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          width: "160px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
      />
    );
  };

  const rowClassName = () => {
    return "custom-row";
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div>
        <span className="bold px-4">{rowData.shipmentId}</span>
        <div style={{ color: "rgba(103, 120, 142, 1)", fontSize: "13px" }} className="px-4 mt-1">
          LCL
        </div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell">
        <India alt="Origin Icon" width={20} />
        <span style={{ padding: "8px", fontWeight: "400" }}>
          {rowData.origin}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell">
        <AE alt="Origin Icon" width={20} />
        <span style={{ padding: "8px", fontWeight: "400" }}>
          {rowData.destination}
        </span>
      </div>
    );
  };

  // Handler for sorting
  const onSort = (event) => {
    const field = event.field;
    const order = event.order;
    let sortedData = [...filteredData];

    sortedData.sort((a, b) => {
      return order === 1 ? (a[field] > b[field] ? 1 : -1) : a[field] < b[field] ? 1 : -1;
    });

    setFilteredData(sortedData);
  };
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleUpcomingDep = () => {
    setSelectedButton(selectedButton === "Upcoming Departures" ? null : "Upcoming Departures");
    // Sort the data by ETA in ascending order
    const sortedData = [...data].sort((a, b) => {
      // Parse the ETA dates
      const dateA = parseDate(a.etd);
      const dateB = parseDate(b.etd);
      // Compare the dates
      return dateA - dateB;
    });
    // Update the filtered data with the sorted data
    setFilteredData(sortedData);
  };
  
  
  
  const handleUpcomingArr = () => {
    setSelectedButton(selectedButton === "Upcoming Arrivals" ? null : "Upcoming Arrivals");
    // Sort the data by ETA in ascending order
    const sortedData = [...data].sort((a, b) => {
      // Parse the ETA dates
      const dateA = parseDate(a.eta);
      const dateB = parseDate(b.eta);
      // Compare the dates
      return dateA - dateB;
    });
    // Update the filtered data with the sorted data
    setFilteredData(sortedData);
  };
  
  // Function to parse dates in the "dd/mm/yyyy" format
  const parseDate = (dateString) => {
    const parts = dateString.split("/");
    // month is 0-based, so subtract 1 from the month
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  

 

  return (
    <div className="mt-5" style={{ minWidth: "1269px", borderRadius: "8px" }}>
      {tableVisible && (
        <>
      <div className="d-flex mb-2 justify-content-end ">
        <button className={`${selectedButton === "Upcoming Departures" ? " selected" : ""} upcoming-dep me-2`} onClick={handleUpcomingDep}>Upcoming Departures</button>
        <button className={`${selectedButton === "Upcoming Arrivals" ? "  selected" : ""} upcoming-dep me-2`} onClick={handleUpcomingArr}>Upcoming Arrivals</button>
        <CloseIcon style={{ fontSize: "18px" }} role="button" onClick={handleToggleTable}/>
      </div>
      
      <div className="shadow">
        <DataTable
          value={currentPageData}
          dataKey="shipmentId"
          paginator={false}
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          currentPageReportTemplate="{first} to {last} out of {totalRecords} "
          // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
          removableSort
          rowClassName={rowClassName}
        >
          <Column
            field="shipmentId"
            header={
              <span
                onClick={() => onSort("shipmentId")}
                style={{ fontFamily: "Roboto" }}
                className="px-4"
              >
                Shipment ID
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            body={shipmentTemplate}
          ></Column>

          <Column
            field="origin"
            header={
              <span onClick={() => onSort("origin")}>
                Origin
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            body={originBodyTemplate}
            headerClassName="custom-header p-3"
            className="p-3"
          ></Column>
          <Column
            field="destination"
            header={
              <span className="p-3">
                Destination
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            body={destinationBodyTemplate}
            className="p-3"
          ></Column>
          <Column
            field="bookedOn"
            header={
              <span className="p-3">
                Booked on
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="etd"
            header={
              <span className="p-3">
                ETD/ATD
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="eta"
            header={
              <span className="p-3">
                ETA/ATA
                <img src={sort} alt="Sort Icon" className="ps-1" />
              </span>
            }
            bodyClassName="custom-cell"
            className="p-3"
          ></Column>
          <Column
            field="status"
            header={<span className="p-3">Status</span>}
            bodyClassName={(rowData) =>
              rowData.status === "Booking In Progress"
                ? "booking-progress-cell"
                : "booked-cell "
            }
            className="p-2 m-3"
          ></Column>
          <Column
            body={actionBodyTemplate}
            header={<span className="p-3">Action</span>}
            className="p-3"
          ></Column>
        </DataTable>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={data.length} // Assuming data is the array of items
          itemsPerPage={10} // Adjust according to your requirement
        />
      </div></>)}
    </div>
  );
};

export default ShipmentHistory;
