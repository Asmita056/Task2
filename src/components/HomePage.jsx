// HomePage.js
import React, { useState } from "react";
// import useSelectedStudents from "./SelectedStudentsContext";
import { useSelectedStudents } from "./SelectedStudentsContext";

const HomePage = ({ students, companies, years }) => {
  const [showRoundTwoColumn, setShowRoundTwoColumn] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTimes, setSelectedTimes] = useState("");
  const { addStudents } = useSelectedStudents();
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const toggleRoundTwoColumn = () => {
    setShowRoundTwoColumn(!showRoundTwoColumn);
  };

  const handleAdd = () => {
    const selectedStudents = students.filter((student) =>
      selectedStudentIds.includes(student.id)
    );
    addStudents(selectedStudents);
  };

  const filteredStudents = students.filter((student) => {
    return (
      (selectedCompany === "" || student.company === selectedCompany) &&
      (selectedYear === "" || student.year === selectedYear) &&
      (selectedTimes === "" || student.times === parseInt(selectedTimes))
    );
  });

  const handleCheckboxChange = (studentId) => {
    setSelectedStudentIds((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Registered Students</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={toggleRoundTwoColumn}
      >
        {showRoundTwoColumn ? "Hide Round Two" : "Add Round Two"}
      </button>
      {showRoundTwoColumn && (
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 float-end"
        >
          Add Students
        </button>
      )}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/3">
          <label className="block">
            <span className="text-gray-700">Company Name:</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="">All</option>
              {companies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-1/3">
          <label className="block">
            <span className="text-gray-700">Year:</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">All</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="w-1/3">
          <label className="block">
            <span className="text-gray-700">No. of Times:</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={selectedTimes}
              onChange={(e) => setSelectedTimes(e.target.value)}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Year</th>
              {showRoundTwoColumn && (
                <th className="py-3 px-6 text-left">Select for Round 2</th>
              )}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.name}
                </td>
                <td className="py-3 px-6 text-left">{student.company}</td>
                <td className="py-3 px-6 text-left">{student.year}</td>
                {showRoundTwoColumn && (
                  <td className="py-3 px-6 text-left">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(student.id)}
                      checked={selectedStudentIds.includes(student.id)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
