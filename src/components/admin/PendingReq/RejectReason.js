import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getallPendingReqs,
  getallUsers,
  rejectReason,
} from "../../../utils/api";

const RejectReason = () => {
  const [remotereqAdmin, setRemotereqAdmin] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    rejectReason(id);
  };
  useEffect(() => {
    loadremotereqAdminData();
  }, []);

  const loadremotereqAdminData = async () => {
    const response = await getallPendingReqs(id);
    console.log(response.data);
    setRemotereqAdmin(response.data);
  };

  //Get User Data
  const [user, setUser] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getallUsers(id);
    setUser(response.data);
  };
  return (
    // main contaienr
    <div className="pl-60 w-screen h-screen flex flex-col p-12 justify-center items-center">
      <div>
        Reject reason for {user.firstname} {user.lastname}
      </div>
      <h1 className="text-2xl mb-3">{remotereqAdmin.user}</h1>
      <form className="w-24 border-2">
        <div>
          <input
            id="rejectReason"
            name="rejectReason"
            type="text"
            placeholder="Specify request reason"
            className="p-2"
            onChange={(e) => onValueChange(e)}
          />
        </div>

        <button
          className="w-52 h-10 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RejectReason;

// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
// value={formik.values.reason}
{
  /* reason errors */
}
{
  /* {formik.touched.reason && formik.errors.reason ? (
            <p className="text-red-500 text-xs">{formik.errors.reason}</p>
          ) : null} */
}
