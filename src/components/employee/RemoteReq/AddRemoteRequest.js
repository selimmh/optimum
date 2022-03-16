import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";
// import moment from "moment";

// api functions
import { addRemoteReq } from "../../utils/api";

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
        .min(10, "Too short")
        .required("*Required"),
    }),

    // submit
    onSubmit: async (values) => {
      // add values
      addRemoteReq(values);
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
        Make new request
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
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
