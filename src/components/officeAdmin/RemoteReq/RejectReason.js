import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getallRemoteReqsAdmin } from "../../utils/api";

function RejectReason() {
  const [remotereqAdmin, setremotereqAdmin] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadremotereqAdminData();
  }, []);

  const loadremotereqAdminData = async () => {
    const response = await getallRemoteReqsAdmin(id);
    setremotereqAdmin(response.data);
  };

  return (
    // main contaienr
    <div className="pl-60 w-screen h-screen flex flex-col p-12 justify-center items-center">
      <div>salut</div>
      <h1 className="text-2xl mb-3">{remotereqAdmin.user}</h1>
      <form className="w-24 border-2">
        <div>
          <input
            id="reason"
            name="reason"
            type="text"
            placeholder="Specify request reason"
            className="p-2"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.reason}
          />
          {/* reason errors */}
          {/* {formik.touched.reason && formik.errors.reason ? (
            <p className="text-red-500 text-xs">{formik.errors.reason}</p>
          ) : null} */}
        </div>

        <button
          className="w-52 h-10 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
          //   onClick={() => editBuildingDetails()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RejectReason;
