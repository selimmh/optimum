// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";

// api functions
import { deleteUser, getallUsers } from "../../../utils/api";

// headers
const headers = ["#", "Active", "Name", "Email", "Role", ""];

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

  // search filter
  const [query, setQuery] = useState("");
  console.log(query);

  // all renders
  return (
    // page container
    <div className="pl-60 w-full h-full flex flex-col items-start justify-start p-12 space-y-5">
      {/* search */}
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
                </tbody>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Users;
