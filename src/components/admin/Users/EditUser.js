import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser, getallUsers } from "../../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { bool } from "yup";

const initialValue = {
  active: null,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  role: "",
  gender: "",
  birthday: "",
  nationality: "",
};

function Edit() {
  const [user, setUser] = useState(initialValue);
  const {
    active,
    firstname,
    lastname,
    email,
    password,
    role,
    gender,
    birthday,
    nationality,
  } = user;

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getallUsers(id);
    setUser(response.data);
  };

  const history = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    console.log(id);
    // history.push("/all");
  };
  return (
    <div className="pl-40 w-full h-screen flex items-center justify-center">
      {/* form */}
      <form className="w-1/2 bg-gray-100 shadow-2xl rounded-lg p-4 grid grid-cols-2 gap-8">
        {/* active */}
        <div className="w-52 h-10">
          <select
            value={active}
            id="active"
            name="active"
            className="w-full h-full"
            onChange={(e) => onValueChange(e)}
          >
            <option value={null}>Status</option>
            <option value={true}>Active</option>
            <option value={false}>Not Active</option>
          </select>
        </div>
        {/* first name */}
        <div className="w-52 h-10">
          <input
            value={firstname}
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First Name"
            className="p-2 w-full"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        {/* last name */}
        <div className="w-52 h-10">
          <input
            value={lastname}
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Lastname"
            className="p-2 w-full"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        {/* email */}
        <div className="w-52 h-10">
          <input
            value={email}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="p-2 w-full"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        {/* password */}
        <div className="w-52 h-10">
          <input
            value={password}
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            className="p-2 w-full"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        {/* role */}
        <div className="w-52 h-10">
          <select
            value={role}
            id="role"
            name="role"
            className="w-full h-full"
            onChange={(e) => onValueChange(e)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Office Admin">Office Admin</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        {/* gender */}
        <div className="w-52 h-10">
          <select
            value={gender}
            id="gender"
            name="gender"
            className="w-full h-full"
            onChange={(e) => onValueChange(e)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* birthday */}
        <div className="w-52 h-10">
          <input
            value={birthday}
            id="birthday"
            name="birthday"
            type="date"
            placeholder="Birthday"
            className="w-full p-2"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        {/* Nation */}
        <div className="w-52 h-10">
          <input
            value={nationality}
            id="nationality"
            name="nationality"
            type="text"
            placeholder="Nationality"
            className="p-2 w-full"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <button
          className="w-52 h-10 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
          onClick={() => editUserDetails()}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
