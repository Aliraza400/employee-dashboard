import React, { createContext, useContext, useState } from "react";
import { getEmployees, saveEmployees } from "../utils/storage";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  // ✅ Load ONCE, synchronously
  const [employees, setEmployees] = useState(() => {
    const data = getEmployees();
    return Array.isArray(data) ? data : [];
  });

  const updateStore = (updated) => {
    setEmployees(updated);
    saveEmployees(updated); // 🔒 always in sync
  };

  const addEmployee = (emp) => {
    const updated = [...employees, { ...emp, id: Date.now() }];
    updateStore(updated);
  };

  const updateEmployee = (emp) => {
    const updated = employees.map((e) => (e.id === emp.id ? emp : e));
    updateStore(updated);
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter((e) => e.id !== id);
    updateStore(updated);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
