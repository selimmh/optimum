// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";

// api functions
import { deleteUser, getallUsers } from "../../../utils/api";

// AddUser form component
import AddUser from "./AddUser";

// headers
const headers = [
  "#",
  "Active",
  "Name",
  // "Last",
  "Email",
  // "Password",
  "Role",
  // "Gender",
  // "Birthday",
  // "Nation",
  "",
  "",
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

  // search filter
  const [query, setQuery] = useState("");
  console.log(query);

  // more details

  const [isOpen, setOpen] = useState(false);
  const toggleMore = (id) => {
    !isOpen ? setOpen(true) : setOpen(false);
  };

  // all renders
  return (
    // page container
    <div className="pl-60 w-full h-full flex flex-col items-start justify-start p-12 space-y-5">
      {/* addUser button */}
      {/* <button
        onClick={toggleForm}
        className="border-2  border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white "
      >
        {formOpen ? <span>Close</span> : <span>Add new user</span>}
      </button> */}

      {formOpen ? (
        <div className="py-10 w-full">
          <AddUser />
        </div>
      ) : null}

      <input
        placeholder="Search user"
        type="text"
        name=""
        id=""
        className="border-2 p-2 border-gray-800 rounded-md"
        onChange={(e) => setQuery(e.target.value)}
      />
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
          {/* {user.map((data) => ( */}
          {user
            .filter(
              (data) =>
                data.firstname.toLowerCase().includes(query) ||
                data.lastname.toLowerCase().includes(query) ||
                data.email.toLowerCase().includes(query)
            )
            .map((data) => (
              <>
                <tbody className="border-b hover:bg-gray-200 transition-all">
                  <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.id}
                  </td>
                  <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {/* {data.active} */}
                    {data.active === true ? (
                      <span class="flex h-3 w-3 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    ) : (
                      <span class="flex h-3 w-3 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.firstname} {data.lastname}
                  </td>
                  {/* <td className="px-5 py-3 text-sm whitespace-nowrap group relative">
                    {data.lastname}
                    <div className="absolute -top-12 left-0 right-0 border-2 p-5 scale-0 group-hover:scale-100">
                      info info info
                    </div>
                  </td> */}
                  <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.email}
                  </td>
                  {/* <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.password}
                  </td> */}
                  <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.role}
                  </td>

                  <td className="px-5 py-3 text-sm whitespace-nowrap relative group cursor-context-menu">
                    <AiOutlineInfoCircle className="text-2xl" />
                    <div className="flex flex-col absolute right-[80%] -top-[50%] z-10 w-fit h-fit border-2 px-4 pt-2 scale-0 text-white bg-gray-700 rounded-md group-hover:scale-100 transition-all duration-300 ">
                      <p>Gender: {data.gender}</p>
                      <p>
                        Birthday:{" "}
                        {data.birthday !== "" ? (
                          data.birthday
                        ) : (
                          <span>Not set</span>
                        )}
                      </p>
                      <p>
                        Nationality:{" "}
                        {data.nationality !== "" ? (
                          data.nationality
                        ) : (
                          <span>Not set</span>
                        )}
                      </p>
                      <p>Buillding: {data.buildingName}</p>
                      <p>Office: {data.officeName}</p>
                      <p>Remote Status: {data.remoteStatus}</p>
                      <p>Percentage: {data.remotePercentage}</p>
                    </div>
                  </td>
                  {/* <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.gender}
                  </td> */}
                  {/* <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.birthday !== "" ? data.birthday : <p>Not set</p>}
                  </td> */}
                  {/* <td className="px-5 py-3 text-sm whitespace-nowrap">
                    {data.nation !== "" ? data.nation : <p>Not set</p>}
                  </td> */}
                  <td className="px-5 py-3 text-sm whitespace-nowrap relative group cursor-context-menu">
                    <AiOutlineSetting className="text-2xl" />
                    <div className=" right-[80%] -top-[50%] align-center justify-center gap-2 w-48 flex flex-wrap absolute z-10 h-fit border-2 px-4 pt-2 scale-0 bg-gray-700 rounded-md group-hover:scale-100 transition-all duration-300">
                      <button
                        onClick={() => history(`/assignDesk/${data.id}`)}
                        className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-gray-100 hover:bg-gray-300"
                      >
                        Assign
                      </button>
                      <button
                        onClick={() => history(`/deAssignDesk/${data.id}`)}
                        className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-gray-100 hover:bg-gray-300"
                      >
                        De-Assign
                      </button>
                      <br />
                      <button
                        className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-gray-100 hover:bg-gray-300"
                        onClick={() => history(`/edituser/${data.id}`)}
                      >
                        Edit
                      </button>
                      {/* <button
                        className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-red-400 hover:bg-red-500"
                        onClick={() => deleteData(data.id)}
                      >
                        Delete
                      </button> */}
                    </div>
                  </td>
                  {/* <td className="space-x-2 px-5 py-3 text-sm whitespace-nowrap ">
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
                  </td> */}
                </tbody>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Users;
