import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getallOffices, getallBuildings } from "../../../utils/api";
function SeeBuilding() {
  const offices = Array.from(Array(10).keys());
  const [building, setBuilding] = useState("");
  //   const [floors, setFloors] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getallBuildings(id);
    setBuilding(response.data);
  };

  const floors = [];
  for (var i = 0; i <= building.floors; i++) {
    floors.push(i);
  }

  return (
    // main contaienr
    <div className="pl-60 w-full h-screen flex flex-col p-12 ">
      <h1 className="text-2xl mb-3">{building.name}</h1>

      {/* <h1 className="text-2xl mb-3">{building.floors}</h1> */}
      {/* floor container */}
      <div className="border-2 p-10 rounded-xl shadow-2xl border-gray-800 w-full h-full flex flex-nowrap flex-col-reverse overflow-y-auto">
        {/* map floors */}
        {floors.map((floor) => (
          // single floor column
          <div className="border-b-2 min-h-[13rem] w-full flex items-center py-5 overflow-hidden scroll-m-0">
            {/* floor name */}
            <div className="pr-10 flex flex-col items-center space-y-2">
              <p>FLOOR</p>
              <div className="flex items-center">
                <p className="font-bold text-lg tracking-widest border border-gray-800 p-1">
                  {floor}
                </p>
              </div>
            </div>
            {/* office container */}
            <div className="h-full flex flex-nowrap overflow-x-auto space-x-4 items-center">
              {/* map offices */}
              {offices.map((office) => (
                //   single office row
                <div className="h-[9rem] min-w-[9rem] border-2 hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 flex flex-col justify-between items-center">
                  <p>Office {office}</p>
                  <button className="border py-1 px-3 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
                    Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeBuilding;
