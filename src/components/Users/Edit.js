import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser, getallUsers } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  role: "",
  gender: "",
  birthday: "",
  nation: "",
};

function Edit() {
  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Too long").required("Required"),
      username: Yup.string().max(20, "Too long").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
  });
  const [user, setUser] = useState(initialValue);
  const {
    firstname,
    lastname,
    email,
    password,
    role,
    gender,
    birthday,
    nation,
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
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("/all");
  };
  return (
    <div className="pl-40 w-full h-full flex items-center justify-center">
      {/* form */}
      <form className="w-1/2 bg-gray-100 shadow-2xl rounded-lg p-4 flex flex-col space-y-4">
        {/* first name */}
        <input
          value={firstname}
          id="firstname"
          name="firstname"
          type="firstname"
          placeholder="First Name"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

        {/* last name */}
        <input
          value={lastname}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

        {/* email */}
        <input
          value={email}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

        {/* password */}
        <input
          value={password}
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

        {/* role */}
        <select
          value={role}
          id="role"
          name="role"
          className="w-full h-full"
          onChange={(e) => onValueChange(e)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="officeAdmin">Office Admin</option>
          <option value="employee">Employee</option>
        </select>

        {/* gender */}
        <select
          value={gender}
          id="gender"
          name="gender"
          className="w-full h-full"
          onChange={(e) => onValueChange(e)}
        >
          <option value="">Select Gender</option>
          <option value="admin">Male</option>
          <option value="officeAdmin">Female</option>
          <option value="employee">Other</option>
        </select>

        {/* birthday */}
        <input
          value={birthday}
          id="birthday"
          name="birthday"
          type="date"
          placeholder="Birthday"
          className="w-full h-full p-2"
          onChange={(e) => onValueChange(e)}
        />

        {/* Nation */}
        <input
          value={nation}
          id="nation"
          name="nation"
          type="text"
          placeholder="Nationality"
          className="p-2"
          onChange={(e) => onValueChange(e)}
        />

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
