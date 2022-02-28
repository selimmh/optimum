import React from "react";
import { useNavigate } from "react-router-dom";

function NavItem(props) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(props.navigate);
      }}
      className="hover:scale-105 cursor-pointer transition-all"
    >
      {props.navItem}
    </div>
  );
}

function Navbar() {
  return (
    // page container
    <div className="bg-gray-200 h-screen w-40 fixed top-0 left-0 bottom-0 p-5">
      {/* nav container */}
      <div className="flex flex-col w-full h-full justify-between">
        {/* nav items */}
        <div>
          <NavItem navItem="Home" navigate="/" />
          <NavItem navItem="Users" navigate="/users" />
          {/* <NavItem navItem="Profile" navigate="/profile" />
          <NavItem navItem="Requests" navigate="/requests" /> */}
          <NavItem navItem="Buildings" navigate="/buildings" />
          <NavItem navItem="Offices" navigate="/offices" />
          {/* <NavItem navItem="Desks" navigate="/desks" />
          <NavItem navItem="People" navigate="/people" />
          <NavItem navItem="Settings" navigate="/settings" /> */}
          {/* <NavItem navItem="FAQ" navigate="/faq" /> */}
          <NavItem navItem="Formik" navigate="/formik" />
          <NavItem navItem="Edit" navigate="/edit" />
          {/* <NavItem navItem="Error" navigate="/error" /> */}
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
