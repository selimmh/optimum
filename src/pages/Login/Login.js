import React from "react";
import { loginUser } from "../../utils/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={loginUser}
    >
      <Form className="w-full overflow-auto rounded-lg shadow-lg">
        <Field name="email">
          {({ field, form }) => (
            <div className="relative">
              <label htmlFor="email" aria-label="Email" className="hidden">
                Email
              </label>
              <input
                {...field}
                className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                placeholder="Email"
                type="text"
                name="email"
                id="email"
                style={
                  form.touched.email && form.errors.email
                    ? { border: "2px solid var(--primary-red)" }
                    : null
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute w-10 text-primary-red right-8 top-2.5"
                style={
                  form.touched.email && form.errors.email
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Field>
        <ErrorMessage
          name="email"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: "0.5rem" }}
        />
        <Field name="password">
          {({ field, form }) => (
            <div className="relative">
              <label
                htmlFor="password"
                aria-label="Password"
                className="hidden"
              >
                Password
              </label>
              <input
                {...field}
                className="w-full p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                style={
                  form.touched.password && form.errors.password
                    ? { border: "2px solid var(--primary-red)" }
                    : null
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute w-10 text-primary-red right-8 top-2.5"
                style={
                  form.touched.password && form.errors.password
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Field>
        <ErrorMessage
          name="password"
          component="div"
          className="text-xs italic text-right text-primary-red"
          style={{ marginTop: "0.5rem" }}
        />
        <button
          type="submit"
          className="py-4 text-sm tracking-wide text-black uppercase rounded-lg shadow-xl outline-none lg:text-base bg-primary-green hover:bg-opacity-75 focus:outline-none "
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
