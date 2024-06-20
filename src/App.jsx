import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import StudentsPage from "./components/StudentsPage";
import "./index.css";
// import SelectedStudentsProvider from "./components/SelectedStudentsContext";
import { SelectedStudentsProvider } from "./components/SelectedStudentsContext";

const App = () => {
  const students = [
    { id: 1, name: "John Doe", company: "Company A", year: 2023, times: 1 },
    { id: 2, name: "Jane Smith", company: "Company A", year: 2022, times: 2 },
  ];
  const companies = ["Company A", "Company B", "Company C"];
  const years = [2022, 2023, 2024];

  return (
    <SelectedStudentsProvider>
      <Router>
        <div className="container mx-auto px-4">
          <nav className="py-4 ">
            <ul className="flex space-x-10">
              <li>
                <Link to="/" className="text-blue-500 hover:text-blue-700">
                  Registered Students
                </Link>
              </li>
              <li>
                <Link
                  to="/students"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Students Round 2
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  students={students}
                  companies={companies}
                  years={years}
                />
              }
            />
            <Route
              path="/students"
              element={<StudentsPage students={students} />}
            />
          </Routes>
        </div>
      </Router>
    </SelectedStudentsProvider>
  );
};

export default App;
