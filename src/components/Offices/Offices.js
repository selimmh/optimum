// react imports
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// api functions
import { deleteOffice, getallOffices } from "../../utils/api";

// AddOffice form component
import AddOffice from "./AddOffice";

// headers
const headers = [
  "#",
  "Office",
  "Building",
  "Floor",
  "Occupancy",
  "Size(w/h)",
  "Office Admin",
  "Actions",
];

// main function
function Offices() {
  // navigate
  const history = useNavigate();

  // office state
  const [office, setOffice] = useState([]);
  useEffect(() => {
    getOffices();
  }, []);

  // fetch function
  const getOffices = async () => {
    const response = await getallOffices();
    setOffice(response.data);
  };

  // delete function
  const deleteData = async (id) => {
    await deleteOffice(id);
    getOffices();
  };

  // form toggler
  const [formOpen, setformOpen] = useState(false);
  const toggleForm = () => {
    !formOpen ? setformOpen(true) : setformOpen(false);
  };

  // all renders
  return (
    // page container
    <div className="pl-52 w-full h-full flex flex-col items-end justify-start p-12">
      {/* addOffice button */}
      <button
        onClick={toggleForm}
        className="mb-10 border-2  border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white "
      >
        {formOpen ? <span>Close</span> : <span>Add new office</span>}
      </button>
      {formOpen ? (
        <div className="py-10 w-full">
          <AddOffice />
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
          {office.map((data) => (
            <tbody className="border-b hover:bg-gray-200 transition-all">
              <td className="px-5 py-3 text-sm whitespace-nowrap">{data.id}</td>

              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.office}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.building}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.floor}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap relative group cursor-pointer">
                {Math.round(
                  (parseInt(data.usableDesk) / parseInt(data.totalDesk)) * 100
                )}
                %{/* tooltip */}
                <span className="absolute -right-1 top-0 border text-xs border-gray-800 transition-all duration-300 p-2 rounded-md scale-0 group-hover:scale-100">
                  <div className="flex flex-col">
                    <p>Total: {data.totalDesk}</p>
                    <p>Usable: {data.usableDesk}</p>
                  </div>
                </span>
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.width}/{data.height}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.oadmin}
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
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Offices;
