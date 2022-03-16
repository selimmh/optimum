import React, { useEffect, useState } from "react";
import { editBuilding, getallBuildings } from "../../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const initialValue = {
  name: "",
  floorsCount: "",
  address: "",
};

function EditBuilding() {
  const [building, setBuilding] = useState(initialValue);
  const { name, floorsCount, address } = building;

  const { id } = useParams();

  useEffect(() => {
    loadBuildingData();
  }, []);

  const loadBuildingData = async () => {
    const response = await getallBuildings(id);
    setBuilding(response.data);
  };

  const history = useNavigate();

  const onValueChange = (e) => {
    setBuilding({ ...building, [e.target.name]: e.target.value });
    console.log(building);
  };

  const editBuildingDetails = async () => {
    await editBuilding(id, building);
    history.push("/all");
  };
  return (
    <div className="pl-40 w-full h-full flex items-center justify-center">
      {/* form */}
      <form className="w-1/2 bg-gray-100 shadow-2xl rounded-lg p-4 flex flex-col items-center space-y-4">
        {/* building name */}
        <input
          value={name}
          id="name"
          name="name"
          type="text"
          placeholder="Building Name"
          className="p-2 w-full"
          onChange={(e) => onValueChange(e)}
        />
        {/* floors */}
        <input
          value={floorsCount}
          id="floorsCount"
          name="floorsCount"
          type="text"
          placeholder="Floors Count"
          className="p-2 w-full"
          onChange={(e) => onValueChange(e)}
        />
        {/* address */}
        <input
          value={address}
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          className="p-2 w-full"
          onChange={(e) => onValueChange(e)}
        />

        <button
          className="w-52 h-10 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
          onClick={() => editBuildingDetails()}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditBuilding;
