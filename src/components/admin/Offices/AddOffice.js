// react imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";

// api functions
import {
  addOffice,
  getallBuildings,
  getAllOfficeAdmins,
} from "../../../utils/api";

// main function
function AddOffice(props) {
  // navigate
  const history = useNavigate();

  // fetch buildings for dropdown
  const [buildingId, setBuildingId] = useState([]);

  useEffect(() => {
    getBuildings();
  }, []);

  const getBuildings = async () => {
    const response = await getallBuildings();
    setBuildingId(response.data);
  };

  // fetch officeAdmins for dropdown
  const [officeAdminId, setOfficeAdminId] = useState([]);

  useEffect(() => {
    getOfficeAdmins();
  }, []);

  const getOfficeAdmins = async () => {
    const response = await getAllOfficeAdmins();
    setOfficeAdminId(response.data);
  };

  // initial values
  const formik = useFormik({
    initialValues: {
      name: "",
      floorNo: "",
      totalDesksCount: "",
      usableDesksCount: "",
      width: "",
      length: "",
      buildingId: "",
      officeAdminId: "",
    },

    // validation
    validationSchema: Yup.object({
      name: Yup.string().max(10, "Too long").required("*Required"),
      buildingId: Yup.number().required("*Required"),
      // floorNo: Yup.number().required("*Required"),
        // .typeError("Number only")
        // .positive("Positive number only")
        // .integer("Integer number only")
        // .max(100, "Max 100 floors")
        // .required("*Required"),
      // totalDesksCount: Yup.number()
      //   .typeError("Number only")
      //   .positive("Positive number only")
      //   .integer("Integer number only")
      //   .max(100, "Max 100 desks")
      //   .required("*Required"),
      // usableDesksCount: Yup.number()
      //   .typeError("Number only")
      //   .positive("Positive number only")
      //   .integer("Integer number only")
      //   .max(100, "Max 100 desks")
      //   .required("*Required"),
      // width: Yup.number()
      //   .typeError("Number only")
      //   .positive("Positive number only")
      //   .integer("Integer number only")
      //   .max(100, "Max 100 meters")
      //   .required("*Required"),
      // length: Yup.number()
      //   .typeError("Number only")
      //   .positive("Positive number only")
      //   .integer("Integer number only")
      //   .max(100, "Max 100 meters")
      //   .required("*Required"),
      // officeAdminId: Yup.number().notRequired(),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      addOffice(values);
      // reset form
      formik.resetForm();
      // refresh page
      // window.location.reload(false);
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
        {/* Office name input */}
        <div className="w-52 h-10">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Office Name"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {/* office name errors */}
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs">{formik.errors.name}</p>
          ) : null}
        </div>

        {/* buildingId input */}
        <div className="w-52 h-10">
          <select
            type="text"
            className="w-full h-full"
            id="buildingId"
            name="buildingId"
            value={formik.values.buildingId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select building</option>
            {buildingId.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}
          </select>
          {/* buildingId errors */}
          {formik.touched.buildingId && formik.errors.buildingId ? (
            <p className="text-red-500 text-xs">{formik.errors.buildingId}</p>
          ) : null}
        </div>

        {/* floor input */}
        <div className="w-52 h-10">
          <input
            id="floorNo"
            name="floorNo"
            type="text"
            placeholder="Floor No"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.floorNo}
          />
          {/* floor errors */}
          {formik.touched.floorNo && formik.errors.floorNo ? (
            <p className="text-red-500 text-xs">{formik.errors.floorNo}</p>
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

        {/* length input */}
        <div className="w-52 h-10">
          <input
            id="length"
            name="length"
            type="text"
            placeholder="length (in meters)"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.length}
          />
          {/* length errors */}
          {formik.touched.length && formik.errors.length ? (
            <p className="text-red-500 text-xs">{formik.errors.length}</p>
          ) : null}
        </div>

        {/* totalDesksCount input */}
        <div className="w-52 h-10">
          <input
            id="totalDesksCount"
            name="totalDesksCount"
            type="text"
            placeholder="Total Desk"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalDesksCount}
          />
          {/* totalDesksCount errors */}
          {formik.touched.totalDesksCount && formik.errors.totalDesksCount ? (
            <p className="text-red-500 text-xs">
              {formik.errors.totalDesksCount}
            </p>
          ) : null}
        </div>

        {/* usableDesksCount input */}
        <div className="w-52 h-10">
          <input
            id="usableDesksCount"
            name="usableDesksCount"
            type="text"
            placeholder="Usable Desk"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usableDesksCount}
          />
          {/* usableDesksCount errors */}
          {formik.touched.usableDesksCount && formik.errors.usableDesksCount ? (
            <p className="text-red-500 text-xs">
              {formik.errors.usableDesksCount}
            </p>
          ) : null}
        </div>

        {/* buildingId input */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="officeAdminId"
            name="officeAdminId"
            value={formik.values.officeAdminId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Office</option>
            {officeAdminId.map((data) => (
              <option value={data.id}>
                {data.firstname} {data.lastname}
              </option>
            ))}
          </select>
          {/* buildingId errors */}
          {formik.touched.officeAdminId && formik.errors.officeAdminId ? (
            <p className="text-red-500 text-xs">
              {formik.errors.officeAdminId}
            </p>
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
