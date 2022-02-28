import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import { addUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function AddUserForm(props) {
  const history = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      active: true,
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
      email: Yup.string().email("Invalid email").required("*Required"),
      password: Yup.string()
        .min(8, "At least 8 charachters")
        .required("*Required"),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "8 Characters, Uppercase, Lowercase, Number, Special Charachter"
      // ),

      role: Yup.string().required("*Required"),
      gender: Yup.string().required("*Required"),
      birthday: Yup.string()
        // .test(
        //   "DOB",
        //   "At least 18 years old",
        //   (date) => moment().diff(moment(date), "years") >= 18
        // )
        .nullable()
        .notRequired(),
      nation: Yup.string()
        .min(3, "Too short")
        .max(10, "Too long")
        .nullable()
        .notRequired(),
    }),

    // submit values
    onSubmit: (values) => {
      addUser(values);
      formik.resetForm();
    },
  });

  return (
    // form
    <form
      onSubmit={formik.handleSubmit}
      className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid grid-cols-4 grid-rows-3 gap-5"
    >
      {/* first name */}
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
        {formik.touched.firstname && formik.errors.firstname ? (
          <p className="text-red-500 text-xs">{formik.errors.firstname}</p>
        ) : null}
      </div>

      {/* last name */}
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
        {formik.touched.lastname && formik.errors.lastname ? (
          <p className="text-red-500 text-xs">{formik.errors.lastname}</p>
        ) : null}
      </div>

      {/* email */}
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
      </div>

      {/* password */}
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
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-xs">{formik.errors.password}</p>
        ) : null}
      </div>

      {/* role */}
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
          <option value="admin">Admin</option>
          <option value="officeAdmin">Office Admin</option>
          <option value="employee">Employee</option>
        </select>
        {formik.touched.role && formik.errors.role ? (
          <p className="text-red-500 text-xs">{formik.errors.role}</p>
        ) : null}
      </div>

      {/* gender */}
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
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <p className="text-red-500 text-xs">{formik.errors.gender}</p>
        ) : null}
      </div>

      {/* birthday */}
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
        {formik.touched.password && formik.errors.birthday ? (
          <p className="text-red-500 text-xs">{formik.errors.birthday}</p>
        ) : null}
      </div>

      {/* nation */}
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
  );
}

export default AddUserForm;

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import moment from "moment";

// import { addUser } from "../../utils/api";
// import { useNavigate } from "react-router-dom";

// function AddUserForm(props) {
//   const history = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       role: "",
//       gender: "",
//       birthday: "",
//       nation: "",
//     },

//     validationSchema: Yup.object({
//       firstname: Yup.string().max(15, "Too long").required("*Required"),
//       lastname: Yup.string().max(20, "Too long").required("*Required"),
//       email: Yup.string().email("Invalid email").required("*Required"),
//       password: Yup.string()
//         .min(8, "At least 8 charachters")
//         .required("*Required"),
//       // .matches(
//       //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       //   "8 Characters, Uppercase, Lowercase, Number, Special Charachter"
//       // ),

//       role: Yup.string().required("*Required"),
//       gender: Yup.string().required("*Required"),
//       birthday: Yup.string()
//         // .test(
//         //   "DOB",
//         //   "At least 18 years old",
//         //   (date) => moment().diff(moment(date), "years") >= 18
//         // )
//         .nullable()
//         .notRequired(),
//       nation: Yup.string()
//         .min(3, "Too short")
//         .max(10, "Too long")
//         .nullable()
//         .notRequired(),
//     }),
//     onSubmit: (values) => {
//       // console.log(values);
//       addUser(values);
//       formik.resetForm();
//       // axios.post("http://localhost:8000/user", values);
//     },
//   });
//   // console.log(formik.values);
//   // console.log(formik.errors);
//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="bg-gray-100 flex flex-col shadow-2xl rounded-lg p-4 space-y-2"
//     >
//       <input
//         id="firstname"
//         name="firstname"
//         type="text"
//         placeholder="First name"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstname}
//       />
//       {formik.touched.firstname && formik.errors.firstname ? (
//         <p className="text-red-500 text-xs">{formik.errors.firstname}</p>
//       ) : null}
//       <input
//         id="lastname"
//         name="lastname"
//         type="text"
//         placeholder="Last name"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastname}
//       />
//       {formik.touched.lastname && formik.errors.lastname ? (
//         <p className="text-red-500 text-xs">{formik.errors.lastname}</p>
//       ) : null}
//       <input
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Email"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <p className="text-red-500 text-xs">{formik.errors.email}</p>
//       ) : null}

//       <input
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Password"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.password}
//       />
//       {formik.touched.password && formik.errors.password ? (
//         <p className="text-red-500 text-xs">{formik.errors.password}</p>
//       ) : null}

//       <select
//         id="role"
//         name="role"
//         value={formik.values.role}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       >
//         <option value="">Select Role</option>
//         <option value="admin">Admin</option>
//         <option value="officeAdmin">Office Admin</option>
//         <option value="employee">Employee</option>
//       </select>
//       {formik.touched.role && formik.errors.role ? (
//         <p className="text-red-500 text-xs">{formik.errors.role}</p>
//       ) : null}

//       <select
//         id="gender"
//         name="gender"
//         value={formik.values.gender}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       >
//         <option value="">Select Gender</option>
//         <option value="admin">Male</option>
//         <option value="officeAdmin">Female</option>
//         <option value="employee">Other</option>
//       </select>
//       {formik.touched.gender && formik.errors.gender ? (
//         <p className="text-red-500 text-xs">{formik.errors.gender}</p>
//       ) : null}

//       <input
//         id="birthday"
//         name="birthday"
//         type="date"
//         defaultValue={null}
//         placeholder="Birthday"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.birthday}
//       />
//       {formik.touched.password && formik.errors.birthday ? (
//         <p className="text-red-500 text-xs">{formik.errors.birthday}</p>
//       ) : null}

//       <input
//         id="nation"
//         name="nation"
//         type="text"
//         placeholder="Nationality"
//         className="p-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.nation}
//       />
//       {formik.touched.nation && formik.errors.nation ? (
//         <p className="text-red-500 text-xs">{formik.errors.nation}</p>
//       ) : null}
//       <button>Submit</button>
//     </form>
//   );
// }

// export default AddUserForm;
