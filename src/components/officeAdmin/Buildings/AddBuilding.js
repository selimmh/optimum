// react imports
import React from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";

// api functions
import { addBuilding } from "../../../utils/api";

// main function
function AddBuilding(props) {
  // navigate
  const history = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      name: "",
      floorsCount: "",
      address: "",
    },

    // validation
    validationSchema: Yup.object({
      name: Yup.string().max(10, "Too long").required("*Required"),
      floorsCount: Yup.number()
        .typeError("Number only")
        .positive("Positive number only")
        .integer("Integer number only")
        .max(100, "Max 100 floors")
        .required("Required"),
      address: Yup.string().max(25, "Too long").required("*Required"),
    }),

    // submit
    onSubmit: (values) => {
      // add values
      addBuilding(values);
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
        Add new building
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
      >
        {/* name input */}
        <div className="w-52 h-10">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Building Name"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {/* name errors */}
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs">{formik.errors.name}</p>
          ) : null}
        </div>

        {/* floors input */}
        <div className="w-52 h-10">
          <input
            id="floorsCount"
            name="floorsCount"
            type="text"
            placeholder="Floors Count"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.floorsCount}
          />

          {/* floors errors */}
          {formik.touched.floorsCount && formik.errors.floorsCount ? (
            <p className="text-red-500 text-xs">{formik.errors.floorsCount}</p>
          ) : null}
        </div>

        {/* address input */}
        <div className="w-52 h-10">
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />

          {/* address errors */}
          {formik.touched.address && formik.errors.address ? (
            <p className="text-red-500 text-xs">{formik.errors.address}</p>
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

export default AddBuilding;
