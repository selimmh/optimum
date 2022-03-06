import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Users from "./components/Users/Users";
import Buildings from "./components/Buildings/Buildings";
import Offices from "./components/Offices/Offices";
import Assignments from "./components/Assignments";
import Logout from "./components/Logout";

// components with id
import EditUser from "./components/Users/EditUser";
import EditBuilding from "./components/Buildings/EditBuilding";
import SeeBuilding from "./components/Buildings/SeeBuilding";

function App() {
  return (
    <div className="w-screen h-auto">
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
