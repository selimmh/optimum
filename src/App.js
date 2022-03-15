import React, { useContext } from "react";
import { CoreContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation"
import Users from "./components/Users/Users"
import ErrorPage from './pages/ErrorPage'

import Login from "./pages/Login/Login";
import OfficeRouter from "./pages/oficeRouter/OfficeRouter";
function App() {
  const { step } = useContext(CoreContext);
  return (
    <div className="w-screen h-auto">
      <Router>
      {/* <Navigation /> */}
        <Routes>

          <Route path="login" element={<Login />}></Route>
          <Route path="/" element={<OfficeRouter/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          {/* <Route path="faq" element={<faq />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
