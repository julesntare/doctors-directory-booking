import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointments from "./components/Appointments";
import Header from "./components/Header";
import AllDoctors from "./pages/doctors/AllDoctors";
import Admin from "./pages/admin/admin";
import Specialties from "./pages/Specialties";
import DoctorDetails from "./pages/doctors/DoctorDetails";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-2 md:pt-1">
      <h1 className="text-center font-bold pb-2 text-2xl text-gray-700">
        <Header />
      </h1>
      <Routes>
        <Route path="/" element={<AllDoctors />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/specialties" element={<Specialties />} />
      </Routes>
    </div>
  );
}

export default App;
