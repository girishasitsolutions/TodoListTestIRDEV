import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Singup(props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  var [record, setRecord] = useState([]);
  var [isDup, setIsDup] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    /*------- If user loggedin then redirect to Home ----------*/
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data, response) => {
    const unique_id = uuid();
    data.ID = unique_id.slice(0, 12);
    //** Dulicate email validation */
    if (record.length > 0) {
      var isDuplicateEmail = record?.map((item, index) => {
        return JSON.parse(item).email.toLowerCase();
      });

      if (isDuplicateEmail.includes(data.email.toLowerCase())) {
        setIsDup(1);
        setValue("email", "");
      } else {
        setRecord(JSON.stringify(data));
        props.addUserHandler(JSON.stringify(data));
        navigate("/login");
      }
    } else {
      setRecord(JSON.stringify(data));
      props.addUserHandler(JSON.stringify(data));
      navigate("/login");
    }
  };

  /*====== On refresh - reload user record ===== */
  useEffect(() => {
    setRecord(props.data.userOperation);
  }, [props.data.userOperation]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <h1>
          <Link className="navbar-brand ml-3 mb-2" to="/">
            {" "}
            TODO LIST: AIR DEV TEST
          </Link>
        </h1>
        <Link className="nav-link justify-content-end" to="/login">
          Login
        </Link>
      </div>

      <div className="row">
        <br />
        <h4 className="mt-5 mb-3">Register Now!</h4>

        {isDup!=0 && (
          <div className="alert alert-danger" role="alert">
            Email is already exist in database! Try again!
          </div>
        )}

        <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6 mb-3 ">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              {...register("firstName", { required: true })}
              value={record.firstName}
              className="form-control form-control-lg"
              placeholder="First Name"
              autoComplete="none"
            />
            {errors.firstName?.type === "required" && (
              <small className="text-danger">First name is required</small>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              {...register("lastName", { required: true })}
              className="form-control form-control-lg"
              placeholder="Last Name"
              autoComplete="none"
            />
            {errors.lastName?.type === "required" && (
              <small className="text-danger">Last Name is required</small>
            )}
          </div>

          <div className="col-12 mb-3 ">
            <label htmlFor="validationCustom03" className="form-label">
              User Name
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              className="form-control  form-control-lg"
              placeholder="Email Address"
              autoComplete="none"
            />
            {errors.email?.type === "required" && (
              <small className="text-danger">Email is required</small>
            )}

            {errors.email?.type === "pattern" && (
              <span role="alert">{errors.email.message}</span>
            )}
          </div>

          <div className="col-12 mb-3 ">
            <label htmlFor="validationCustom04" className="form-label">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control  form-control-lg"
              placeholder="Password"
              autoComplete="none"
            />
            {errors.password && (
              <small className="text-danger">Password is required</small>
            )}
          </div>
          <div className="col-12">
            <input
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              name="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
