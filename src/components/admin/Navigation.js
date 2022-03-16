import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { GiOfficeChair } from "react-icons/gi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdAssignmentInd } from "react-icons/md";

function NavItem(props) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(props.navigate);
      }}
      className="space-x-2 flex items-center tracking-wider text-xl justify-start cursor-pointer transition-all hover:bg-gray-600 px-1 py-2 hover:shadow-xl rounded-md"
    >
      <div>{props.icon}</div>
      <p>{props.navItem}</p>
    </div>
  );
}

function Navbar() {
  return (
    // page container
    <div className="bg-gray-800 text-white h-screen w-48 fixed top-0 left-0 bottom-0 p-5">
      {/* nav container */}
      <div className="flex flex-col w-full h-full justify-between">
        {/* prfile */}
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full" />
          <h2>Melody Cock</h2>
          <h1>Admin</h1>
        </div>
        {/* nav items */}
        <div className="space-y-4 -mt-32">
          <NavItem icon={<MdSpaceDashboard />} navItem="Home" navigate="/" />
          <NavItem icon={<FaUsers />} navItem="Users" navigate="/users" />
          <NavItem
            icon={<HiOfficeBuilding />}
            navItem="Buildings"
            navigate="/buildings"
          />
          <NavItem
            icon={<GiOfficeChair />}
            navItem="Offices"
            navigate="/offices"
          />
          <NavItem
            icon={<MdAssignmentInd />}
            navItem="Assignments"
            navigate="/assignments"
          />
        </div>
        <div>
          <NavItem
            icon={<RiLogoutBoxFill />}
            navItem="Log out"
            navigate="/logout"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
