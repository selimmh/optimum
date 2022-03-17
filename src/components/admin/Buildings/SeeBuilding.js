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
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    // main contaienr
    <div className="pl-60 w-full h-screen flex flex-col p-12 ">
      <h1 className="text-2xl mb-3">Metrics for {building.name}</h1>
      <h1>officesNo: {building.officesNo}</h1>
      <h1>totalDesksCount: {building.totalDesksCount}</h1>
      <h1>usableDesksCount: {building.usableDesksCount}</h1>
      <h1>freeDesksCount: {building.freeDesksCount}</h1>
      <h1>occupiedDesksCount: {building.occupiedDesksCount}</h1>
      <h1>occupationPercentage: {building.occupationPercentage}</h1>
      {/* <Doughnut data={10} /> */}
      <div className="w-48 h-48">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default SeeBuilding;
