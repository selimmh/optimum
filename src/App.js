//react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

// general
import Logout from "./components/Logout";
import Login from "./components/Login";

// admin
import Navigation from "./components/admin/Navigation";
import Home from "./components/admin/Home";
import Users from "./components/admin/Users/Users";
import Buildings from "./components/admin/Buildings/Buildings";
import Offices from "./components/admin/Offices/Offices";
import Assignments from "./components/admin/Assignments";

import EditUser from "./components/admin/Users/EditUser";
import EditBuilding from "./components/admin/Buildings/EditBuilding";
import SeeBuilding from "./components/admin/Buildings/SeeBuilding";
import Assign from "./components/admin/Users/Assign";
import DeAssign from "./components/admin/Users/DeAssign";

// employee
import NavigationEmployee from "./components/employee/Navigation";
import HomeEmployee from "./components/employee/Home";
import UsersEmployee from "./components/employee/Users/Users";
import BuildingsEmployee from "./components/employee/Buildings/Buildings";
import OfficesEmployee from "./components/employee/Offices/Offices";
import AssignmentsEmployee from "./components/employee/Assignments";

import SeeBuildingEmployee from "./components/employee/Buildings/SeeBuilding";

import AddRemoteRequest from "./components/employee/RemoteReq/AddRemoteRequest";

// oadmin
import NavigationOAdmin from "./components/officeAdmin/Navigation";
import HomeOAdmin from "./components/officeAdmin/Home";
import UsersOAdmin from "./components/officeAdmin/Users/Users";
import BuildingsOAdmin from "./components/officeAdmin/Buildings/Buildings";
import OfficesOAdmin from "./components/officeAdmin/Offices/Offices";
import AssignmentsOAdmin from "./components/officeAdmin/Assignments";

import EditUserOAdmin from "./components/officeAdmin/Users/EditUser";
import EditBuildingOAdmin from "./components/officeAdmin/Buildings/EditBuilding";
import SeeBuildingOAdmin from "./components/officeAdmin/Buildings/SeeBuilding";
import AssignOAdmin from "./components/officeAdmin/Users/Assign";
import DeAssignOAdmin from "./components/officeAdmin/Users/DeAssign";

import ErrorPage from "./pages/ErrorPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-screen h-auto">
      <Router basename="/">
        <Routes>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>

      {/* admin */}
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <FadeLoader size={30} loading={loading} />
        </div>
      ) : (
        <Router basename="/admin">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/users" element={<Users />}></Route>
            <Route path="/buildings" element={<Buildings />}></Route>
            <Route path="/offices" element={<Offices />}></Route>
            <Route path="/assignments" element={<Assignments />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/edituser/:id" element={<EditUser />} exact />
            <Route path="/editbuilding/:id" element={<EditBuilding />} exact />
            <Route path="/seeBuilding/:id" element={<SeeBuilding />} exact />
            <Route path="/assignDesk/:id" element={<Assign />} exact />
            <Route path="/DeAssignDesk/:id" element={<DeAssign />} exact />
          </Routes>
        </Router>
      )}

      {/* employee */}
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <FadeLoader size={30} loading={loading} />
        </div>
      ) : (
        <Router basename="/employee">
          <NavigationEmployee />
          <Routes>
            <Route path="/" element={<HomeEmployee />}></Route>

            <Route path="/users" element={<UsersEmployee />}></Route>
            <Route path="/buildings" element={<BuildingsEmployee />}></Route>
            <Route path="/offices" element={<OfficesEmployee />}></Route>
            <Route
              path="/assignments"
              element={<AssignmentsEmployee />}
            ></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route
              path="/seeBuilding/:id"
              element={<SeeBuildingEmployee />}
              exact
            />
          </Routes>
        </Router>
      )}

      {/* office admin */}
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <FadeLoader size={30} loading={loading} />
        </div>
      ) : (
        <Router basename="/oadmin">
          <NavigationOAdmin />
          <Routes>
            <Route path="/" element={<HomeOAdmin />}></Route>

            <Route path="/users" element={<UsersOAdmin />}></Route>
            <Route path="/buildings" element={<BuildingsOAdmin />}></Route>
            <Route path="/offices" element={<OfficesOAdmin />}></Route>
            <Route path="/assignments" element={<AssignmentsOAdmin />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/edituser/:id" element={<EditUserOAdmin />} exact />
            <Route
              path="/editbuilding/:id"
              element={<EditBuildingOAdmin />}
              exact
            />
            <Route
              path="/seeBuilding/:id"
              element={<SeeBuildingOAdmin />}
              exact
            />
            <Route path="/assignDesk/:id" element={<AssignOAdmin />} exact />
            <Route
              path="/DeAssignDesk/:id"
              element={<DeAssignOAdmin />}
              exact
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
