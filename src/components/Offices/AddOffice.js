// react imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";

// api functions
import { addOffice, getallBuildings, getallUsers } from "../../utils/api";

// main function
function AddOffice(props) {
  // navigate
  const history = useNavigate();

  // fetch buildings for dropdown
  const [building, setBuilding] = useState([]);
  useEffect(() => {
    getBuildings();
  }, []);

  const getBuildings = async () => {
    const response = await getallBuildings();
    setBuilding(response.data);
  };

  // fetch users for dropdown
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getallUsers();
    setUser(response.data);
  };

  // initial values
  const formik = useFormik({
    initialValues: {
      office: "",
      building: "",
      floor: "",
      totalDesk: "",
      usableDesk: "",
      width: "",
      height: "",
      oadmin: "Not Assigned",
    },

    // validation
    validationSchema: Yup.object({
      office: Yup.string().max(10, "Too long").required("*Required"),
      building: Yup.string().required("*Required"),
      floor: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 floors")
        .required("*Required"),
      totalDesk: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 desks")
        .required("*Required"),
      usableDesk: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 desks")
        .required("*Required"),
      width: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 meters")
        .required("*Required"),
      height: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 meters")
        .required("*Required"),
      oadmin: Yup.string().notRequired(),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      addOffice(values);
      // reset form
      formik.resetForm();
      // refresh page
      window.location.reload(false);
    },
  });

  // all renders
  return (
    <>
      {/* title */}
      <div className="text-2xl -mt-28 mb-10 text-center w-fit px-4">
        Add new office
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
      >
        {/* office input */}
        <div className="w-52 h-10">
          <input
            id="office"
            name="office"
            type="text"
            placeholder="Office Name"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.office}
          />
          {/* office errors */}
          {formik.touched.office && formik.errors.office ? (
            <p className="text-red-500 text-xs">{formik.errors.office}</p>
          ) : null}
        </div>

        {/* building input */}
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
          {/* building errors */}
          {formik.touched.building && formik.errors.building ? (
            <p className="text-red-500 text-xs">{formik.errors.building}</p>
          ) : null}
        </div>

        {/* floor input */}
        <div className="w-52 h-10">
          <input
            id="floor"
            name="floor"
            type="text"
            placeholder="Floor"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.floor}
          />
          {/* floor errors */}
          {formik.touched.floor && formik.errors.floor ? (
            <p className="text-red-500 text-xs">{formik.errors.floor}</p>
          ) : null}
        </div>

        {/* width input */}
        <div className="w-52 h-10">
          <input
            id="width"
            name="width"
            type="text"
            placeholder="Width (in meters)"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.width}
          />
          {/* width errors */}
          {formik.touched.width && formik.errors.width ? (
            <p className="text-red-500 text-xs">{formik.errors.width}</p>
          ) : null}
        </div>

        {/* height input */}
        <div className="w-52 h-10">
          <input
            id="height"
            name="height"
            type="text"
            placeholder="Height (in meters)"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.height}
          />
          {/* height errors */}
          {formik.touched.height && formik.errors.height ? (
            <p className="text-red-500 text-xs">{formik.errors.height}</p>
          ) : null}
        </div>

        {/* totalDesk input */}
        <div className="w-52 h-10">
          <input
            id="totalDesk"
            name="totalDesk"
            type="text"
            placeholder="Total Desk"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalDesk}
          />
          {/* totalDesk errors */}
          {formik.touched.totalDesk && formik.errors.totalDesk ? (
            <p className="text-red-500 text-xs">{formik.errors.totalDesk}</p>
          ) : null}
        </div>

        {/* usableDesk input */}
        <div className="w-52 h-10">
          <input
            id="usableDesk"
            name="usableDesk"
            type="text"
            placeholder="Usable Desk"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usableDesk}
          />
          {/* usableDesk errors */}
          {formik.touched.usableDesk && formik.errors.usableDesk ? (
            <p className="text-red-500 text-xs">{formik.errors.usableDesk}</p>
          ) : null}
        </div>

        {/* office admin input */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="oadmin"
            name="oadmin"
            value={formik.values.oadmin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Office Admin</option>
            {user.map((data) =>
              data.role == "admin" ? (
                <option value={`${data.firstname} ${data.lastname}`}>
                  {data.firstname} {data.lastname}
                </option>
              ) : null
            )}
          </select>
          {/* oadmin errors */}
          {formik.touched.oadmin && formik.errors.oadmin ? (
            <p className="text-red-500 text-xs">{formik.errors.oadmin}</p>
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

export default AddOffice;
