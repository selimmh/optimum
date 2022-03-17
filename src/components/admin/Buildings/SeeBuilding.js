import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// chartjs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { getallOffices, getallBuildings } from "../../../utils/api";
function SeeBuilding() {
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

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Occupied", "Free"],
    datasets: [
      {
        label: "# of Votes",
        data: [building.occupationPercentage, 100 - building.occupationPercentage],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",

        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    // main contaienr
    <div className="pl-60 w-full h-screen flex flex-col p-12 items-center justify-center">
      <h1 className="text-2xl mb-3">Metrics for {building.name}</h1>
      <h1>Offices: {building.officesNo} | Total Desks: {building.totalDesksCount} | Usable Desks: {building.usableDesksCount} </h1>
      <h1>Free Desks: {building.freeDesksCount} | Occupied Desks: {building.occupiedDesksCount} | Occupation %: {building.occupationPercentage} </h1>


      {/* <Doughnut data={10} /> */}
      <div className="w-96 h-96 ">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default SeeBuilding;
