import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Users from "./components/Users/Users";
import Buildings from "./components/Buildings/Buildings";
import Offices from "./components/Offices/Offices";
import Assignments from "./components/Assignments";
import Login from './pages/Login/Login'
import Logout from "./components/Logout";
import RemoteRequest from "./components/RemoteWorkRequest/RemoteRequest"

// components with id
import EditUser from "./components/Users/EditUser";
import EditBuilding from "./components/Buildings/EditBuilding";
import SeeBuilding from "./components/Buildings/SeeBuilding";
import Assign from "./components/Users/Assign";

function App() {
  return (
    <div className="w-screen h-auto">
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="remotework" element={<RemoteRequest />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="buildings" element={<Buildings />}></Route>
          <Route path="offices" element={<Offices />}></Route>
          <Route path="assignments" element={<Assignments />}></Route>
          <Route path="logout" element={<Logout />}></Route>

          <Route path="edituser/:id" element={<EditUser />} exact />
          <Route path="editbuilding/:id" element={<EditBuilding />} exact />
          <Route path="seeBuilding/:id" element={<SeeBuilding />} exact />
          <Route path="assignDesk/:id" element={<Assign />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
