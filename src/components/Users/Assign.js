// react imports
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";

// api functions
import { getallBuildings, getallOffices, getallUsers } from "../../utils/api";

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

  // fetch buildings for dropdown
  const [building, setBuilding] = useState([]);
  useEffect(() => {
    getBuildings();
  }, []);

  const getBuildings = async () => {
    const response = await getallBuildings();
    setBuilding(response.data);
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
      office: "",
      building: "",
    },

    // validation
    validationSchema: Yup.object({
      building: Yup.string().required("*Required"),
      office: Yup.string().required("*Required"),
      desk: Yup.string().required("*Required"),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      //   addOffice(values);
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
        {/* building dropdown
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="building"
            name="building"
            value={formik.values.building}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Building</option>
            {building.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
          building errors
          {formik.touched.building && formik.errors.building ? (
            <p className="text-red-500 text-xs">{formik.errors.building}</p>
          ) : null}
        </div> */}

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
                Office: {data.name} Building: {data.buildingName}
              </option>
            ))}
          </select>
          {/* office errors */}
          {formik.touched.office && formik.errors.office ? (
            <p className="text-red-500 text-xs">{formik.errors.office}</p>
          ) : null}
        </div>

        {/* desk dropdown
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="desk"
            name="desk"
            value={formik.values.desk}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Desk</option>
            {office.map((data) => (
              <option value={data.id}>
                {data.office} {data.building}
              </option>
            ))}
          </select>
          office errors
          {formik.touched.desk && formik.errors.desk ? (
            <p className="text-red-500 text-xs">{formik.errors.desk}</p>
          ) : null}
        </div> */}

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
