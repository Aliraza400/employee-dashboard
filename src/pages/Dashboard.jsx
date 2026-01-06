import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useEmployees } from "../context/EmployeeContext";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
  const { employees = [] } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const active = employees.filter((e) => e.active).length;

  return (
    <>
      <Navbar />
      <div className="p-6 w-[90%] mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>Total: {employees.length}</div>
          <div>Active: {active}</div>
          <div>Inactive: {employees.length - active}</div>
        </div>

        <button
          onClick={() => {
            setEditData(null);
            setShowForm(true);
          }}
          className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:cursor-pointer"
        >
          Add Employee
        </button>

        {showForm && (
          <EmployeeForm editData={editData} close={() => setShowForm(false)} />
        )}

        <SearchFilter
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
        />

        <EmployeeTable
          setEditData={setEditData}
          setShowForm={setShowForm}
          search={search}
          gender={gender}
          status={status}
        />
      </div>
    </>
  );
};

export default Dashboard;
