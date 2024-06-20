import React, { useState } from "react";

const DriveStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companynames = ["Godrej", "TCS", "Infosys"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactNo" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className=" flex m-3">
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-lg "
        >
          {selectedCompany || "Select the Company"}
        </button>
        {isOpen && (
          <ul className="">
            {companynames.map((companyname) => (
              <li
                key={companyname}
                onClick={() => handleCompanyClick(companyname)}
                className="cursor:pointer"
              >
                {companyname}
              </li>
            ))}
          </ul>
        )}
        <div>
          <label
            htmlFor="academicYear"
            className="block text-sm font-medium text-gray-700"
          >
            Academic Year
          </label>
          <select
            id="academicYear"
            name="academicYear"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select Year</option>
            <option value="FE">FE</option>
            <option value="SE">SE</option>
            <option value="TE">TE</option>
            <option value="BE">BE</option>
          </select>
        </div>

        <div>
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
    </div>
  );
};

export default DriveStatus;
