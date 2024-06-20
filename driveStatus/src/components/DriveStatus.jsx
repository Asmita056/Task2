import React, { useState } from 'react';
import RegistrationDetails from './RegistrationDetails';
import RoundTwoDetails from './RoundTwoDetails';

const DriveStatus = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    Year: '',
    timesVisited: '',
  });
  const [viewRoundTwo, setViewRoundTwo] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contactNo' && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleViewRoundTwo = () => {
    setViewRoundTwo(true);
  };

  const handleBackToRoundOne = () => {
    setViewRoundTwo(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-around m-3">
        <div className="m-3 w-full md:w-1/4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <select
            id="companyName"
            name="companyName"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select Company Name</option>
            <option value="Godrej">Godrej</option>
            <option value="TCS">TCS</option>
            <option value="Amazon">Amazon</option>
            <option value="Flipkart">Flipkart</option>
          </select>
        </div>
        <div className="m-3 w-full md:w-1/4">
          <label
            htmlFor="Year"
            className="block text-sm font-medium text-gray-700"
          >
            Academic Year
          </label>
          <select
            id="Year"
            name="Year"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select Year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>

        <div className="m-3 w-full md:w-1/4">
          <label
            htmlFor="timesVisited"
            className="block text-sm font-medium text-gray-700"
          >
            No. of Times Visited
          </label>
          <select
            id="timesVisited"
            name="timesVisited"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select Number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      {viewRoundTwo ? (
        <RoundTwoDetails
          selectedStudents={selectedStudents}
          handleBackToRoundOne={handleBackToRoundOne}
        />
      ) : (
        <>
          <RegistrationDetails handleStudentSelection={handleStudentSelection} />
          <button
            onClick={handleViewRoundTwo}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Round 2
          </button>
        </>
      )}
    </div>
  );
};

export default DriveStatus;
