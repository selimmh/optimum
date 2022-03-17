// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// api functions
import { getallPendingReqs } from "../../../utils/api";

// headers
const headers = ["#", "Status", "User", "Date", "%", "Reason", "Actions"];

// main function
function PendingReqs() {
  // navigate
  const history = useNavigate();

  // user state
  const [remoteRequestAdmin, setRemoteRequestAdmin] = useState([]);
  useEffect(() => {
    getRemoteRequestsAdmin();
  }, []);

  // fetch function
  const getRemoteRequestsAdmin = async () => {
    const response = await getallPendingReqs();
    setRemoteRequestAdmin(response.data);
  };

  // all renders
  return (
    // page container
    <div className="pl-60 w-full h-full flex flex-col items-end justify-start p-12">
      {/* table container */}
      <div className="w-full overflow-auto rounded-lg shadow-lg">
        {/* table user  */}
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
          {remoteRequestAdmin.map((data) => (
            <>
              <tbody className="border-b hover:bg-gray-200 transition-all">
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {/* {data.id} */}
                </td>
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.status === "Pending" ? (
                    <span class="flex h-3 w-3 relative">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                  ) : null}{" "}
                </td>

                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.username}
                </td>
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.month}/{data.year}
                </td>

                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.percentage}%
                </td>
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.requestReason}
                </td>
                <td className="px-5 py-3 text-sm whitespace-nowrap flex space-x-4">
                  <button
                    className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-gray-100 hover:bg-gray-300"
                    // onClick={() => history(`/edituser/${data.id}`)}
                  >
                    Accept
                  </button>
                  <button
                    className="border-gray-800 text-xs border px-2 py-1 rounded-sm shadow-md hover:scale-105 transition-all bg-gray-100 hover:bg-gray-300"
                    // onClick={() => history(`/edituser/${data.id}`)}
                    onClick={() => history(`/rejectReason/${data.id}`)}
                  >
                    Reject
                  </button>
                </td>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default PendingReqs;
