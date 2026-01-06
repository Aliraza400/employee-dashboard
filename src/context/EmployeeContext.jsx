{
  /*import React, { createContext, useContext, useEffect, useState } from "react";
import { getEmployees, saveEmployees } from "../utils/storage";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = getEmployees();
    setEmployees(Array.isArray(storedEmployees) ? storedEmployees : []);
  }, []);

  const addEmployee = (emp) => {
    setEmployees((prev) => {
      const updated = [...prev, emp];
      saveEmployees(updated);
      return updated;
    });
  };

  const updateEmployee = (emp) => {
    setEmployees((prev) => {
      const updated = prev.map((e) => (e.id === emp.id ? emp : e));
      saveEmployees(updated);
      return updated;
    });
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      saveEmployees(updated);
      return updated;
    });
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
export const useEmployees = () => useContext(EmployeeContext); */
}

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
