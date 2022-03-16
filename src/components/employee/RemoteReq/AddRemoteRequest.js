import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";
// import moment from "moment";

// api functions
import { addRemoteReq } from "../../../utils/api";

// main function
function AddRemoteRequest(props) {
  // navigate
  const history = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      percentage: "",
      reason: "",
    },

    // validation
    validationSchema: Yup.object({
      percentage: Yup.number()
        .typeError("Numbers only")
        .positive("Positive numbers only")
        .max(100, "Max 100%")
        .min(5, "Min 5%")
        .required("*Required"),
      reason: Yup.string()
        .max(50, "Too long")
        .min(15, "Too short")
        .required("*Required"),
    }),

    // submit
    onSubmit: async (values) => {
      // add values
      addRemoteReq(values);
      console.log(values)
      // reset form
      formik.resetForm();
      // refresh page
      // window.location.reload(false);
    },
  });

  // all renders
  return (
    // page container
    <>
      {/* title */}
      <div className="flex flex-col justify-center align-center">
        Make new request
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col justify-center align-center hegith h-screen my-0 mx-auto w-full max-w-xs"
      >
        {/* percentage input */}
        <div>
          <input
            id="percentage"
            name="percentage"
            type="number"
            placeholder="Percentage"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.percentage}
          />
          {/* firstname error */}
          {formik.touched.percentage && formik.errors.percentage ? (
            <p className="text-red-500 text-xs">{formik.errors.percentage}</p>
          ) : null}
        </div>

        {/* reason input */}
        <div>
          <textarea
            id="reason"
            name="reason"
            type="text"
            placeholder="Specify request reason"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reason}
          />
          {/* reason errors */}
          {formik.touched.reason && formik.errors.reason ? (
            <p className="text-red-500 text-xs">{formik.errors.reason}</p>
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

export default AddRemoteRequest;
