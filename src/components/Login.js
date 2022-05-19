import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  var [record, setRecord] = useState([]);
  const navigate = useNavigate();
  var [isLogin, setIsLogin] = useState(0);

  useEffect(() => {
    /*------- If user loggedin then redirect to Home ----------*/
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const onSubmit = async (data, response) => {
    if (record.length > 0) {
      const indexKey = record.findIndex((item, key) => {
        return (
          JSON.parse(item)
            .email.toLowerCase()
            .includes(data.email.toLowerCase()) &&
          JSON.parse(item).password == data.password
        );
      });

      if (indexKey >= 0) {
        //========= User exist
        //  console.log("Arr",JSON.parse(record[indexKey]))
        localStorage.setItem("token", record[indexKey]);
        navigate("/");
      } else {
        setIsLogin(1);
        localStorage.removeItem("token");
      }
    } else {
      setIsLogin(2);
      localStorage.removeItem("token");
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
        <Link className="nav-link justify-content-end" to="/signup">
          Sign up
        </Link>
      </div>

      {isLogin == 1 && (
        <div className="alert alert-danger" role="alert">
          Email and Password not match! Try again!
        </div>
      )}

      {isLogin == 2 && (
        <div className="alert alert-danger" role="alert">
          Register yourself first!
        </div>
      )}

      <div className="row">
        <br />
        <h4 className="mt-5 col-md-12 mb-3">Please enter login detail</h4>
        <form className="form row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12 mb-3 form-group">
            <label htmlFor="formGroupExampleInput" className="form-label">
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
          <div className="col-md-12 mb-4 form-group form-group-icon">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Password
            </label>
            <div className="input-icon">
              <i className="far fa-eye-slash"></i>
            </div>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              autoComplete="none"
            />
            {errors.password && (
              <small className="text-danger">Password is required</small>
            )}
          </div>
          <div className="col-md-12 mb-3 form-group">
            <p>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Login
              </button>
            </p>
            <p className="text-center">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
 
      </div>
    </div>
  );
}
