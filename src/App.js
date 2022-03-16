import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navigation from "./components/admin/Navigation";
import Home from "./components/admin/Home";
import Users from "./components/admin/Users/Users";
import Buildings from "./components/admin/Buildings/Buildings";
import Offices from "./components/admin/Offices/Offices";
import Assignments from "./components/admin/Assignments";
import Login from "./pages/Login/Login";
import Logout from "./components/Logout";

// components with id
import EditUser from "./components/admin/Users/EditUser";
import EditBuilding from "./components/admin/Buildings/EditBuilding";
import SeeBuilding from "./components/admin/Buildings/SeeBuilding";
import Assign from "./components/admin/Users/Assign";
import DeAssign from "./components/admin/Users/DeAssign";

function App() {
  return (
    <div className="w-screen h-auto">
      {/* admin */}
      <Router basename="/admin">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
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

      {/* employee */}
      <Router basename="/employee">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
    </div>
  );
}

export default App;
