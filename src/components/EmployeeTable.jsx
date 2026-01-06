import React from "react";
import { useEmployees } from "../context/EmployeeContext";

const EmployeeTable = ({
  setEditData,
  setShowForm,
  search,
  gender,
  status,
}) => {
  const { employees, deleteEmployee } = useEmployees();

  const filteredEmployees = employees.filter((e) => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());

    const matchGender = gender ? e.gender === gender : true;

    const matchStatus = status
      ? status === "active"
        ? e.active
        : !e.active
      : true;

    return matchSearch && matchGender && matchStatus;
  });

  if (!filteredEmployees.length) {
    return <p className="text-center mt-4">No employees found</p>;
  }

  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((e) => (
          <tr key={e.id} className="border-t text-center">
            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.dob}</td>
            <td>{e.state}</td>
            <td className="flex gap-2 justify-center">
              <button
                className="text-green-500 hover:cursor-pointer"
                onClick={() => {
                  setEditData(e);
                  setShowForm(true);
                }}
              >
                Edit
              </button>
              <button
                className="text-rose-500 hover:cursor-pointer"
                onClick={() =>
                  window.confirm("Delete?") && deleteEmployee(e.id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
