import React from 'react';

const RoundTwoDetails = ({ selectedStudents, handleBackToRoundOne }) => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">List of Students Eligible for Round 2</h1>
      <div className="overflow-x-auto">
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
            {selectedStudents.map((student) => (
              <tr key={student.srNo} className="hover:bg-gray-100">
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
      </div>
      <button
        onClick={handleBackToRoundOne}
        className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Back to Round 1
      </button>
    </>
  );
};

export default RoundTwoDetails;
