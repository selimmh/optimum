import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let history = useNavigate();

  const adminPage = () => {
    history("/admin");
    window.location.reload();
  };

  const oadminPage = () => {
    history("/oadmin");
    window.location.reload();
  };

  const employeePage = () => {
    history("/employee");
    window.location.reload();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="m-20 text-2xl">Select Role:</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={adminPage}
          className="border-2 border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white"
        >
          Admin
        </button>
        <button
          onClick={oadminPage}
          className="border-2 border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white"
        >
          Office Admin
        </button>
        <button
          onClick={employeePage}
          className="border-2 border-gray-800 py-2 px-4 rounded-md hover:bg-gray-800 hover:text-white"
        >
          Employee
        </button>
      </div>
    </div>
  );
}

export default Login;
