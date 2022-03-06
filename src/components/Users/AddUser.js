// react imports
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

// api functions
import { addUser } from "../../utils/api";

// main function
function AddUser(props) {
  // navigate
  const history = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      active: "true",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      gender: "",
      birthday: "",
      nation: "",
    },

    // validation
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, "Too long").required("*Required"),
      lastname: Yup.string().max(20, "Too long").required("*Required"),
      email: Yup.string().email("Invalid email").notRequired("*Required"),
      password: Yup.string()
        .min(8, "At least 8 charachters")
        .notRequired("*Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "8 Characters, Uppercase, Lowercase, Number, Special Charachter"
        ),
      role: Yup.string().required("*Required"),
      gender: Yup.string().required("*Required"),
      birthday: Yup.string(),
      // .nullable()
      // .default(null)
      // .notRequired()
      // .test(
      //   "DOB",
      //   "No younger than 18",
      //   (date) => moment().diff(moment(date), "years") >= 18
      // ),
      nation: Yup.string()
        .min(3, "Too short")
        .max(10, "Too long")
        .default("Not set")
        .nullable()
        .notRequired(),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      addUser(values);
      // reset form
      formik.resetForm();
      // refresh page
      window.location.reload(false);
    },
  });

  // all renders
  return (
    // page container
    <>
      {/* title */}
      <div className="text-2xl -mt-28 mb-10 text-center w-fit px-4">
        Add new user
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
      >
        {/* firstname input */}
        <div>
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First name"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {/* firstname error */}
          {formik.touched.firstname && formik.errors.firstname ? (
            <p className="text-red-500 text-xs">{formik.errors.firstname}</p>
          ) : null}
        </div>
        {/* lastname input */}
        <div>
          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last name"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {/* lastname errors */}
          {formik.touched.lastname && formik.errors.lastname ? (
            <p className="text-red-500 text-xs">{formik.errors.lastname}</p>
          ) : null}
        </div>
        {/* email input */}
        <div>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* email errors */}
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
          ) : null}
        </div>
        {/* password input */}
        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* password errors */}
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-xs">{formik.errors.password}</p>
          ) : null}
        </div>
        {/* role input */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Office Admin">Office Admin</option>
            <option value="Employee">Employee</option>
          </select>
          {/* role errors */}
          {formik.touched.role && formik.errors.role ? (
            <p className="text-red-500 text-xs">{formik.errors.role}</p>
          ) : null}
        </div>
        {/* gender input */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* gender errors */}
          {formik.touched.gender && formik.errors.gender ? (
            <p className="text-red-500 text-xs">{formik.errors.gender}</p>
          ) : null}
        </div>
        {/* birthday input */}
        <div className="w-52 h-10">
          <input
            id="birthday"
            name="birthday"
            type="date"
            defaultValue={null}
            placeholder="Birthday"
            className="w-full h-full p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          />
          {/* birthday errors */}
          {formik.touched.password && formik.errors.birthday ? (
            <p className="text-red-500 text-xs">{formik.errors.birthday}</p>
          ) : null}
        </div>
        {/* nation input */}
        <div>
          <input
            id="nation"
            name="nation"
            type="text"
            placeholder="Nationality"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nation}
          />
          {/* nation errrors */}
          {formik.touched.nation && formik.errors.nation ? (
            <p className="text-red-500 text-xs">{formik.errors.nation}</p>
          ) : null}
        </div>
        {/* actions */}
        <div className="w-52 h-10">
          <button className="w-full h-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddUser;
