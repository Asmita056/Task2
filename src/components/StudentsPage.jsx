// StudentsPage.jsx
import React from 'react';

const StudentsPage = ({ students }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">All Registered Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map(student => (
              <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-6 text-left">{student.company}</td>
                <td className="py-3 px-6 text-left">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
