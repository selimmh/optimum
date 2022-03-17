import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// validation packages
import { useFormik } from "formik";
import * as Yup from "yup";
// import moment from "moment";

// api functions
import { addRemoteReq, getallUsers } from "../../../utils/api";

// main function
function AddRemoteRequest(props) {
  // navigate
  const history = useNavigate();

  // initial values
  const formik = useFormik({
    initialValues: {
      percentage: "",
      requestReason: "",
      userId: null,
    },

    // validation
    validationSchema: Yup.object({
      percentage: Yup.number()
        .typeError("Numbers only")
        .positive("Positive numbers only")
        .max(100, "Max 100%")
        .min(5, "Min 5%")
        .required("*Required"),
      requestReason: Yup.string()
        .max(50, "Too long")
        .min(15, "Too short")
        .required("*Required"),
    }),

    // submit
    onSubmit: async (values) => {
      // add values
      addRemoteReq(values);
      // console.log(values)
      // reset form
      formik.resetForm();
      // refresh page
      // window.location.reload(false);
    },
  });

  // fetch employees for dropdown
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getallUsers();
    setEmployees(response.data);
  };

  // all renders
  return (
    // page container
    <>
      <div className="text-2xl -mt-20 mb-10 w-full text-center  px-4">
        Make new Remote Request
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className=" bg-gray-100 shadow-2xl rounded-lg p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
      >
        {/* buildingId input */}
        <div className="w-52 h-10">
          <select
            className="w-full h-full"
            id="userId"
            name="userId"
            value={formik.values.userId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Employee</option>
            {employees.map((data) =>
              data.role === "Employee" && data.active == true ? (
                <option value={data.id}>
                  {data.firstname} {data.lastname}
                </option>
              ) : null
            )}
          </select>
          {/* buildingId errors */}
          {formik.touched.officeAdminId && formik.errors.officeAdminId ? (
            <p className="text-red-500 text-xs">
              {formik.errors.officeAdminId}
            </p>
          ) : null}
        </div>

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

        {/* requestReason input */}
        <div>
          <textarea
            id="requestReason"
            name="requestReason"
            type="text"
            placeholder="Specify a request reason"
            className="p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.requestReason}
          />
          {/* reason errors */}
          {formik.touched.requestReason && formik.errors.requestReason ? (
            <p className="text-red-500 text-xs">
              {formik.errors.requestReason}
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

export default AddRemoteRequest;
