import React, { useState, createContext } from "react";
import {Navigate} from 'react-router-dom';
import Cookies from "js-cookie";
export const CoreContext = createContext();

function CoreContextProvider(props) {
  //creating API objects from our API classes
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("");

  function Login() {
    return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://465b-46-97-177-99.ngrok.io/login", requestOptions)
      .then(async (response) => {
        if (response.ok) {
          setStep(1);
          let data = await response.json();
          setLoggedIn(true);
          console.log(data);
          setRole(data.role);

          setAccessToken(data.accessToken);
          Cookies.set("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken);
          resolve(200);

        } else {
          setLoggedIn(false);

          setStep(0);
          resolve(401);
        }
      })
      .catch((error) => console.log("error", error));
    });
  }

  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserId, setNewUserId] = useState("");
  function AddUser() {
    var myHeaders  = {
      "Authorization": accessToken,
      "Content-Type": "application/json"
    };
    myHeaders.append("Authorization", accessToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstname: "sdfsdfsg",
      lastname: "dfgdfgdfg",
      email: newUserEmail,
      password: "Ahasdndjeldsdf#d1sf",
      role: "Admin",
      gender: "Male",
      birthday: "2000-02-09",
      nationality: "sndfjnsdjf",
      active: true,
      hashedPass: "",
      id: 2,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://465b-46-97-177-99.ngrok.io/user", requestOptions)
      .then(async (response) => {
        if (response.ok) {
          setNewUserId("success");
        } else {
          setNewUserId("error");
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  const value = {
    loggedIn,
    newUserId,
    setNewUserEmail,
    AddUser,
    role,
    Login,
    step,
    setEmail,
    email,
    setPassword,
    password,
    setLoggedIn,
    accessToken
  };



  function Logout() {
    loggedIn(false)
  }
  return (
    <CoreContext.Provider value={value}>{props.children}</CoreContext.Provider>
  );
}

export default CoreContextProvider;
