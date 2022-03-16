// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// api functions
import { deleteBuilding, getallBuildings } from "../../utils/api";

// AddBuilding form component
import AddBuilding from "./AddBuilding";

// Header items
const headers = ["#", "Name", "Floors Number", "Address", "Actions"];

// main function
function Buildings() {
  // navigate
  const history = useNavigate();

  // building state
  const [building, setBuilding] = useState([]);
  useEffect(() => {
    getBuildings();
  }, []);

  // fetch function
  const getBuildings = async () => {
    const response = await getallBuildings();
    setBuilding(response.data);
  };

  // delete function
  const deleteData = async (id) => {
    await deleteBuilding(id);
    getBuildings();
  };

  // form toggler
  const [formOpen, setformOpen] = useState(false);
  const toggleForm = () => {
    !formOpen ? setformOpen(true) : setformOpen(false);
  };

  // all renders
  return (
    // page container
    <div className="pl-60 w-full h-full flex flex-col items-end justify-start p-12">
      {/* addBuilding button */}
      <button
        onClick={toggleForm}
        className="mb-10 border-2  border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white "
      >
        {formOpen ? <span>Close</span> : <span>Add new building</span>}
      </button>
      {formOpen ? (
        <div className="py-10 w-full">
          <AddBuilding />
        </div>
      ) : null}
      {/* table container */}
      <div className="w-full overflow-auto rounded-lg shadow-lg">
        {/* table  */}
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              {headers.map((header) => (
                <td className="p-5 text-md font-bold text-left text-white whitespace-nowrap">
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          {building.map((data) => (
            // console.log(data),
            <tbody className="border-b hover:bg-gray-200 transition-all">
              <td className="px-5 py-3 text-sm whitespace-nowrap">{data.id}</td>

              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.name}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.floorsCount}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.address}
              </td>
              <td className="space-x-2 px-5 py-3 text-sm whitespace-nowrap">
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => history(`/editbuilding/${data.id}`)}
                >
                  Edit
                </button>
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => deleteData(data.id)}
                >
                  Del
                </button>
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => history(`/seeBuilding/${data.id}`)}
                >
                  See
                </button>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Buildings;
