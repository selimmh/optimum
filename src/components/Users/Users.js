import React, { useEffect, useState } from "react";
import { deleteUser, getallUsers } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUserForm";
import Edit from "./Edit";

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

function Users() {
  const history = useNavigate();

  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getallUsers();
    // console.log(response);
    setUser(response.data);
  };

  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  };

  // const toggleActive = async (id) => {
  //   await deleteUser(id);
  //   getUsers();
  // };

  const [formOpen, setformOpen] = useState(false);
  const toggleForm = () => {
    !formOpen ? setformOpen(true) : setformOpen(false);
  };

  return (
    // page container
    <div className="pl-52 w-full h-full flex flex-col items-end justify-start p-12">
      {/* content container */}
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
            // console.log(data),
            <tbody className="border-b hover:bg-gray-200 transition-all">
              <td className="px-5 py-3 text-sm whitespace-nowrap">{data.id}</td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.active ? <span>True</span> : <span>False</span>}
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
                {data.birthday}
              </td>
              <td className="px-5 py-3 text-sm whitespace-nowrap">
                {data.nation}
              </td>
              <td className="space-x-2 px-5 py-3 text-sm whitespace-nowrap">
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => history(`/edit/${data.id}`)}
                >
                  Edit
                </button>
                <button
                  className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all"
                  onClick={() => deleteData(data.id)}
                >
                  Del
                </button>
                <button className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all">
                  Act
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
