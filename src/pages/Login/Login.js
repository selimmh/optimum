import React, { useContext } from "react";
import { CoreContext } from "../../context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { setEmail, setPassword, Login } = useContext(CoreContext);
  const navigator = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
      <label class="block text-gray-700 text-sm font-bold mb-2 mr-44" for="username">
        Email
      </label>
        <input
        type="email"
        onChange={(e) => setEmail(e.target.value)} placeholder="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
              <label class="block text-gray-700 text-sm font-bold mb-2 mr-44" for="username">
        Password
      </label>
        <input
        type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <div
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={async() => {
            let status = await Login();
            console.log(status)
            if(status===200){
              navigator("/");
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
