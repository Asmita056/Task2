import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompanyList from "./components/CompanyList";
import StudentsPage from "./components/StudentsPage";
import "./index.css";
import { SelectedStudentsProvider } from "./components/SelectedStudentsContext";

const App = () => {

  const students = [
    { id: 1, TPOID : '0012', name: 'John Doe',collegeid: 'vu2f2122017', branch: "Computer Science",  company: "Company A", mobileNumber: "123-456-7890", year: 2024, times: 1,   },
    { id: 2, TPOID : '0023', name: 'James Bond',collegeid: 'vu2f2122017', branch: "Computer Science",  company: "Company B", mobileNumber: "123-456-7890", year: 2023, times: 3,   },
    { id: 3, TPOID : '0056', name: 'Krish Joel',collegeid: 'vu2f2122017', branch: "Computer Science",  company: "Company A", mobileNumber: "123-456-7890", year: 2025, times: 2,   },
    { id: 4, TPOID : '0086', name: 'James Karl',collegeid: 'vu2f2122017', branch: "Computer Science",  company: "Company C", mobileNumber: "123-456-7890", year: 2025, times: 1,   },
    { id: 5, TPOID : '0001', name: 'Jon Cena',collegeid: 'vu2f2122017', branch: "Computer Science",  company: "Company B", mobileNumber: "123-456-7890", year: 2024,  },
];


  const companies = ["Company A", "Company B", "Company C"];
  const years = [2022, 2023, 2024];
  const times = [1, 2, 3, 4];

  return (
    <SelectedStudentsProvider>
      <Router>
        <div className="container mx-auto px-4">
          <nav className="py-4 ">
            <ul className="flex space-x-10">
            <li>
                <Link
                  to="/companylist"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Company List
                </Link>
              </li>
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
              path="/companylist"
              element={
                <CompanyList
                  companies={companies}
                  years={years}
                  times={times}
                  students={students}
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
