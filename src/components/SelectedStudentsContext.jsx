// SelectedStudentsContext.js
import React, { createContext, useState, useContext } from "react";

const SelectedStudentsContext = createContext();

export const SelectedStudentsProvider = ({ children }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const addStudents = (students) => {
    setSelectedStudents((prevStudents) => [...prevStudents, ...students]);
  };

  return (
    <SelectedStudentsContext.Provider value={{ selectedStudents, addStudents }}>
      {children}
    </SelectedStudentsContext.Provider>
  );
};

export const useSelectedStudents = () => useContext(SelectedStudentsContext);

export default SelectedStudentsContext;
