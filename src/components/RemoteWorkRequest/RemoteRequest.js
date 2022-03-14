import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";


const RemoteRequest = () => {

  function SendRequest(props){
    const history = useNavigate();

    const formik = useFormik({
      initialValues:{

      }
    });

  }

  return (
    <div>

    </div>
  )
}

export default RemoteRequest