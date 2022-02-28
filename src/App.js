import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Requests from "./components/Requests";
import Buildings from "./components/Buildings";
import Offices from "./components/Offices";
import Desks from "./components/Desks";
import People from "./components/People";
import Settings from "./components/Settings";
import Faq from "./components/Faq";
import Error from "./components/Error";
import Formik from "./components/Users/AddUserForm";
import Edit from "./components/Users/Edit";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/requests" element={<Requests />}></Route>
          <Route path="/buildings" element={<Buildings />}></Route>
          <Route path="/offices" element={<Offices />}></Route>
          <Route path="/desks" element={<Desks />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/formik" element={<Formik />}></Route>
          <Route path="/edit" element={<Edit />}></Route>

          <Route path="/edit/:id" element={<Edit />} exact />

          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
