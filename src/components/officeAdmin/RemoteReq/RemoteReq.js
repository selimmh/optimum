// react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// api functions
import { deleteRemoteReq, getallRemoteReqs } from "../../utils/api";

// AddUser form component
import AddRemoteRequest from "./AddRemoteRequest";

// headers
const headers = ["#", "Date", "%", "Reason", "Message", "Status"];
const headersAdmin = ["#", "User", "Date", "%", "Reason", "Actions"];

// main function
function RemoteReq() {
  // navigate
  const history = useNavigate();

  // user state
  const [remoteRequest, setRemoteRequest] = useState([]);
  useEffect(() => {
    getRemoteRequests();
  }, []);

  // fetch function
  const getRemoteRequests = async () => {
    const response = await getallRemoteReqs();
    setRemoteRequest(response.data);
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
        {formOpen ? <span>Close</span> : <span>Make request</span>}
      </button>

      {formOpen ? (
        <div className="py-10 w-full">
          <AddRemoteRequest />
        </div>
      ) : null}
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
          {remoteRequest.map((data) => (
            <>
              <tbody className="border-b hover:bg-gray-200 transition-all">
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.id}
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
                <td className="px-5 py-3 text-sm whitespace-nowrap">
                  {data.rejectReason}
                </td>
                <td
                  className={`px-5 py-3 text-sm whitespace-nowrap ${
                    data.status === "Approved"
                      ? "text-green-500"
                      : data.status === "Pending"
                      ? "text-blue-500"
                      : "text-red-500"
                  }`}
                >
                  {data.status}
                </td>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default RemoteReq;
