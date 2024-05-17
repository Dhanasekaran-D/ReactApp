import React, {useState} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CloseIcon from "@mui/icons-material/Close";
import sort from '../../../assets/sort.png'
import { ReactComponent as India} from '../../../assets/in.svg'
import { ReactComponent as AE} from '../../../assets/ae.svg';
import Pagination from "../../Core-Components/Pagination";

const AllBookings = ({ filterData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page
  console.log(filterData)
    const [data, setData] = useState([
      {
        shipmentId: 2345678907,
        mode: "LCL",
        origin: "Nhava Sheva(INNSA)",
        destination: "JEBEL ALI(AEJEA)",
        bookedOn: "2024-05-01",
        etd: "2024-05-10",
        eta: "2024-05-10",
        status: "Booked",
        action: "Add Pending Details",
      },
      {
        shipmentId: 2345678907,
        mode: "LCL",
        origin: "Nhava Sheva(INNSA)",
        destination: "JEBEL ALI(AEJEA)",
        bookedOn: "2024-05-01",
        etd: "2024-05-10",
        eta: "2024-05-10",
        status: "Booked",
        action: "Add Pending Details",
      },
      {
        shipmentId: 2345678907,
        mode: "LCL",
        origin: "Nhava Sheva(INNSA)",
        destination: "JEBEL ALI(AEJEA)",
        bookedOn: "2024-05-01",
        etd: "2024-05-10",
        eta: "2024-05-10",
        status: "Booked",
        action: "Add Pending Details",
      },
      {
        shipmentId: 2345678907,
        mode: "LCL",
        origin: "xhava Sheva(INNSA)",
        destination: "JEBEL ALI(AEJEA)",
        bookedOn: "2024-05-01",
        etd: "2024-05-10",
        eta: "2024-05-10",
        status: "Booking In Progress",
        action: "Add Pending Details",
      },
      {
        shipmentId: 2345678907,
        mode: "LCL",
        origin: "Nhava Sheva(INNSA)",
        destination: "JEBEL ALI(AEJEA)",
        bookedOn: "2024-05-01",
        etd: "2024-05-10",
        eta: "2024-05-10",
        status: "Cargo Picked Up",
        action: "Add Pending Details",
      },
    ]);
  
    const filteredData = filterData(data);
    console.log(filteredData)
    
    // Calculate the start and end index of the data for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  
    // Extract the data for the current page
    const currentPageData = data.slice(startIndex, endIndex);
  
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
          <span className="bold">{rowData.shipmentId}</span>
          <div style={{ color: "rgba(103, 120, 142, 1)", fontSize: "13px" }}>
            LCL
          </div>
        </div>
      );
    };
    const originBodyTemplate = (rowData) => {
      return (
        <div className="origin-cell" style={{textOverflow:'ellipsis'}}>
          <India alt="Origin Icon" width={20} />
          <span style={{ padding: "8px", fontWeight: "400",  }}>
            {rowData.origin}
          </span>
        </div>
      );
    };
    const destinationBodyTemplate = (rowData) => {
      return (
        <div className="origin-cell" style={{whiteSpace:'nowrap'}}>
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
      let sortedData = [...data];
  
      if (order === 1) {
        sortedData.sort((a, b) => (a[field] > b[field] ? 1 : -1));
      } else {
        sortedData.sort((a, b) => (a[field] < b[field] ? 1 : -1));
      }
  
      setData(sortedData);
    };
    return (
      <div className="" style={{  borderRadius: "8px" }}>
        <div className="shadow">
          <DataTable
            value={filteredData}
            dataKey="shipmentId"
            paginator={false}
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            currentPageReportTemplate="{first} to {last} out of {totalRecords} "
            // paginatorTemplate=" PrevPageLink PageLinks NextPageLink  CurrentPageReport "
            removableSort
            rowClassName={rowClassName}
             className="px-3"
             style={{width:'1146px'}}
          >
            <Column
              field="shipmentId"
              header={
                <span
                  onClick={() => onSort("shipmentId")}
                  style={{  fontSize:'13px', width: "176px" ,  }}
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
                <span onClick={() => onSort("origin")}  style={{  fontSize:'13px', width:'127px', overflow: 'hidden', whiteSpace:'nowrap' }}>
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
                <span className="p-3"  style={{  fontSize:'13px', width:'170px' }}>
                  Destination
                  <img src={sort} alt="Sort Icon" className="ps-1" />
                </span>
              }
              body={destinationBodyTemplate}
              className="p-2"
            ></Column>
            <Column
              field="bookedOn"
              header={
                <span   style={{  fontSize:'13px' }}>
                  Booked on
                  <img src={sort} alt="Sort Icon" className="ps-1" />
                </span>
              }
              bodyClassName="custom-cell"
              className="p-2"
            ></Column>
            <Column
              field="etd"
              header={
                <span   style={{  fontSize:'13px', paddingLeft:'15px'  }}>
                  ETD/ATD
                  <img src={sort} alt="Sort Icon" className="ps-1" />
                </span>
              }
              bodyClassName="custom-cell"
              className="p-2"
            ></Column>
            <Column
              field="eta"
              header={
                <span style={{  fontSize:'13px', paddingLeft:'15px' }}>
                  ETA/ATA
                  <img src={sort} alt="Sort Icon" className="ps-1" />
                </span>
              }
              bodyClassName="custom-cell"
              className="p-2"
            ></Column>
            <Column
              field="status"
              header={<span className="p-3"  style={{  fontSize:'13px' }}>Status</span>}
              bodyClassName={(rowData) =>
                rowData.status === "Booking In Progress"
                  ? "booking-progress-cell"
                  : "booked-cell "
              }
              className="p-2 m-3"
            ></Column>
            <Column
              body={actionBodyTemplate}
              header={<span className="p-3" style={{  fontSize:'13px' }}>Action</span>}
              className="p-2"
            ></Column>
          </DataTable>
  
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={data.length} // Assuming data is the array of items
            itemsPerPage={10} // Adjust according to your requirement
          />
        </div>
      </div>
    );
  };
  
export default AllBookings;
