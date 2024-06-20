import React, { useState } from "react";
import { useSelectedStudents } from "./SelectedStudentsContext";

const HomePage = ({ students, companies, years }) => {
  const [showRoundTwoColumn, setShowRoundTwoColumn] = useState(false);
  const { addStudents, selectedStudents } = useSelectedStudents();
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const toggleRoundTwoColumn = () => {
    setShowRoundTwoColumn(!showRoundTwoColumn);
  };

  const handleAddStudents = () => {
    const selectedStudentsToAdd = students.filter((student) =>
      selectedStudentIds.includes(student.id)
    );
    addStudents(selectedStudentsToAdd);
    setSelectedStudentIds([]);
  };

  const handleCheckboxChange = (studentId) => {
    setSelectedStudentIds((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  const isStudentAdded = (studentId) => {
    return selectedStudents.some((student) => student.id === studentId);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Registered Students</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={toggleRoundTwoColumn}
        disabled={showRoundTwoColumn}
      >
        {showRoundTwoColumn ? "Adding Students..." : "Add Round Two"}
      </button>
      {showRoundTwoColumn && (
        <button
          onClick={handleAddStudents}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 float-end"
        >
          Add Students
        </button>
      )}
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
            {students.map((student) => (
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
                    {isStudentAdded(student.id) ? (
                      <span className="text-green-500">Added to Round Two</span>
                    ) : (
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(student.id)}
                        checked={selectedStudentIds.includes(student.id)}
                      />
                    )}
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
