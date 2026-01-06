const KEY = "employees";

export const getEmployees = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveEmployees = (employees) => {
  localStorage.setItem(KEY, JSON.stringify(employees));
};
