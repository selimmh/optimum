// react imports
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";

// api functions
import {
  getallBuildings,
  getallOffices,
  getallUsers,
  assignToOffice,
} from "../../utils/api";

// main function
function Assign(props) {
  // navigate
  const history = useNavigate();
  const [user, setUser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getallUsers(id);
    setUser(response.data);
  };

  // fetch offices for dropdown
  const [office, setOffice] = useState([]);
  useEffect(() => {
    getOffices();
  }, []);

  const getOffices = async () => {
    const response = await getallOffices();
    setOffice(response.data);
  };

  // initial values
  const formik = useFormik({
    initialValues: {
      officeId: "",
      userId: user.id,
    },

    // validation
    validationSchema: Yup.object({
      officeId: Yup.string().required("*Required"),
      userId: Yup.string().required("*Required"),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      assignToOffice(values);
      // reset form
      formik.resetForm();
      // refresh page
      window.location.reload(false);
    },
  });

  // all renders
  return (
    <div className="pl-60 w-full h-screen flex flex-col items-center justify-center p-20">
      {/* title */}
      <div className="text-2xl mb-10 text-center w-fit px-4">
        Assign desk to {user.firstname} {user.lastname}
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid grid-cols-1 gap-5"
      >
        {/* user dropdown */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="office"
            name="office"
            value={formik.values.office}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={user.id}>
              {user.firstname} {user.lastname}
            </option>
          </select>
          {/* office errors */}
          {formik.touched.office && formik.errors.office ? (
            <p className="text-red-500 text-xs">{formik.errors.office}</p>
          ) : null}
        </div>

        {/* office dropdown */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="office"
            name="office"
            value={formik.values.office}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Office</option>
            {office.map((data) => (
              <option value={data.id}>
                Id: {data.id} Office: {data.name} Building: {data.buildingName}
              </option>
            ))}
          </select>
          {/* office errors */}
          {formik.touched.office && formik.errors.office ? (
            <p className="text-red-500 text-xs">{formik.errors.office}</p>
          ) : null}
        </div>

        {/* actions */}
        <div className="w-52 h-10">
          <button className="w-full h-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Assign;
