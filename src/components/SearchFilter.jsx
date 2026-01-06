export default function SearchFilter({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-4">
      {/* Search by Name */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-64"
      />

      {/* Filter by Gender */}
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* Filter by Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
