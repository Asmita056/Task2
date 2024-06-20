export default function RegistrationDetails() {
  return (
    <>
      <h1>List of Registered Students</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Sr No</th>
            <th className="px-4 py-2 border-b">TPO ID</th>
            <th className="px-4 py-2 border-b">Branch</th>
            <th className="px-4 py-2 border-b">College ID</th>
            <th className="px-4 py-2 border-b">Name of Student</th>
            <th className="px-4 py-2 border-b">Contact No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.srNo}>
              <td className="px-4 py-2 border-b">{student.srNo}</td>
              <td className="px-4 py-2 border-b">{student.tpoId}</td>
              <td className="px-4 py-2 border-b">{student.branch}</td>
              <td className="px-4 py-2 border-b">{student.clgId}</td>
              <td className="px-4 py-2 border-b">{student.name}</td>
              <td className="px-4 py-2 border-b">{student.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
