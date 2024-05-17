import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header";
import ShipLoader from "./Components/Loader/ShipLoader";
import RecentBooking from "./Components/QuickBooking/RecentBooking";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Inbox";
import ShipmentsHome from "./Components/Shipments";
import Invoice from "./Components/Invoice/Invoice";
import { Footer } from "./Components/Layout/Footer";
import Quotation from "./Components/Quotations/Quotation";
import ShipmentBase from "./Components/ShipmentDetails/ShipmentBase";

function App() {
  const [activePage, setActivePage] = useState("dashboard");


  return (
    <BrowserRouter>
      <Header activePage={activePage} />
      <div style={{ marginTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipments" element={<ShipmentsHome />} />
          <Route path="/recentBooking" element={<RecentBooking />} />
          <Route path="/inbox" element={<Home />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/base" element={<ShipmentBase />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
