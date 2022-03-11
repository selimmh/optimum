// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// api functions
import { deleteUser, getallUsers } from "../../utils/api";

// AddUser form component
import AddUser from "./AddUser";

// headers
const headers = [
  "#",
  "Active",
  "First",
  "Last",
  "Email",
  "Password",
  "Role",
  "Gender",
  "Birthday",
  "Nation",
  "Actions",
];

// main function
function Users() {
  // navigate
  const history = useNavigate();

  // user state
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  // fetch function
  const getUsers = async () => {
    const response = await getallUsers();
    setUser(response.data);
  };

  // delete function
  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
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
      {/* addUser button */}
      <button
        onClick={toggleForm}
        className="mb-10 border-2  border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white "
      >
        {formOpen ? <span>Close</span> : <span>Add new user</span>}
      </button>
      {formOpen ? (
        <div className="py-10 w-full">
          <AddUser />
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
          {user.map((data) => (
            <tbody className="border-b hover:bg-gray-200 transition-all">
              <td className="px-5 py-3 text-sm whitespace-nowrap">{data.id}</td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.active}
                {data.active == "true" ? (
                  <div className="bg-green-400 h-3 w-3 rounded-full" />
                ) : (
                  <div className="bg-red-400 h-3 w-3 rounded-full" />
                )}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.firstname}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.lastname}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.email}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.password}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.role}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.gender}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.birthday !== "" ? data.birthday : <p>Not set</p>}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.nation !== "" ? data.nation : <p>Not set</p>}
              </td>
              <td className="space-x-2 px-5 py-3 text-sm whitespace-nowrap">
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => history(`/edituser/${data.id}`)}
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
                  onClick={() => history(`/assignDesk/${data.id}`)}
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                >
                  Assign
                </button>
                <button className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all">
                  De-Assign
                </button>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Users;
