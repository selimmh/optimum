import React, { useState } from "react";
import { addUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  buildingName: "",
  floorCount: "",
  buildingAddress: "",
};

function Buildings() {
  const [user, setUser] = useState(initialValue);
  const { buildingName, floorCount, buildingAddress } = user;

  let history = useNavigate();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("/all");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="bg-gray-100 flex flex-col shadow-2xl rounded-lg p-4 space-y-2">
        <label>Add building</label>
        <input
          required
          type="text"
          name="buildingName"
          value={buildingName}
          placeholder="Building name"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />
        <input
          required
          type="number"
          name="floorCount"
          value={floorCount}
          placeholder="Floor count"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />
        <input
          required
          type="text"
          name="buildingAddress"
          value={buildingAddress}
          placeholder="Building address"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

        <button
          onClick={() => addUserDetails()}
          className="bg-white p-1 hover:bg-gray-800 hover:text-white"
        >
          Add user
        </button>
        <button
          onClick={() => history.push("/all")}
          className="bg-white p-1 hover:bg-red-500 hover:text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Buildings;
