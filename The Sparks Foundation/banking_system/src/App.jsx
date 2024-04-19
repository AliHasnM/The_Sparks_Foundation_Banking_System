// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ViewCustomersPage from "./components/ViewCustomersPage";
import ViewCustomerPage from "./components/ViewCustomerPage";
import TransferMoneyPage from "./components/TransferMoneyPage";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/customers" element={<ViewCustomersPage />} />
        <Route exact path="/customer/:id" element={<ViewCustomerPage />} />
        <Route exact path="/transfer" element={<TransferMoneyPage />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
