import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

export default function EmployeeForm({ editData, close }) {
  const { addEmployee, updateEmployee } = useEmployees();
  const [form, setForm] = useState(editData || {
    id: Date.now(),
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const submit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("All fields required");
      return;
    }
    editData ? updateEmployee(form) : addEmployee(form);
    close();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <input className="border p-2 w-full mb-2"
        placeholder="Full Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <select className="border p-2 w-full mb-2"
        value={form.gender}
        onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input type="date" className="border p-2 w-full mb-2"
        value={form.dob}
        onChange={e => setForm({ ...form, dob: e.target.value })}
      />

      <input type="file" onChange={handleImage} />

      {form.image && <img src={form.image} className="h-16 mt-2" />}

      <select className="border p-2 w-full my-2"
        value={form.state}
        onChange={e => setForm({ ...form, state: e.target.value })}>
        <option value="">Select State</option>
        <option>KA</option>
        <option>MH</option>
        <option>DL</option>
      </select>

      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
        Save
      </button>
    </div>
  );
}
