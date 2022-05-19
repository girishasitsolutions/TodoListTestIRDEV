import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export default function Home(props) {
  const [userData, setUserData] = useState([]);
  const [todoItem, setTodoItem] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, response) => {
    const unique_id = uuid();
    data.ID = unique_id.slice(0, 12);
    data.userID = userData.ID;
    data.createAt = new Date();
    setTodoItem((oldTodo) => {
      return [JSON.stringify(data), ...oldTodo];
    });
    setValue("title", "");
    setValue("description", "");
    // console.log("enter: ", JSON.stringify(data))

    props.addTodoHandler(JSON.stringify(data));
  };

  useEffect(() => {
    /*------- If user not loggedin then redirect to login ----------*/
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      let userDetail = JSON.parse(localStorage.getItem("token"));
      setUserData(userDetail);

      /*------ Only loggedin users Todo should fetch ---------*/
      // const userTodos = props.getUserTodoHandler(userDetail.ID)
      let filterUsersTodo = props.data.todoOperation;
      // console.log(filterUsersTodo) ;
      let newList = filterUsersTodo.filter((item, index) => {
        return JSON.parse(item).userID !== userDetail.ID;
      });

      setTodoItem(newList);
    }
  }, [props.data.todoOperation]);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <h1>
            <Link className="navbar-brand ml-3 mb-2" to="/"> 
              TODO LIST: AIR DEV TEST
            </Link>
          </h1>
          <Link className="nav-link justify-content-end" to="/logout">
            Logout
          </Link>
        </div>
        <div className="alert alert-success mb-1" role="alert">
          Welcome {userData.firstName + " " + userData.lastName} !
        </div>

        <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12">
            <br />
            <h4>ADD TODO</h4>
            <div className="col-lg-12 col-md-12 mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Title
              </label>
              <input
                {...register("title", { required: true })}
                className="form-control "
                placeholder="Enter Todo Title"
                autoComplete="none"
              />
              {errors.title?.type === "required" && (
                <small className="text-danger">Todo title is required</small>
              )}
            </div>
            <div className="col-lg-12  col-md-12 mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Detail
              </label>
              <textarea
                {...register("description", { required: true })}
                className="form-control"
                aria-label="With textarea"
              ></textarea>
              {errors.description?.type === "required" && (
                <small className="text-danger">
                  Todo description is required
                </small>
              )}
            </div>
            <div className="col-lg-12  col-md-12 align-middle">
              <label>
                &nbsp; <br />
              </label>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col">
            <br />

            <h4>TODO Listing</h4>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Detail</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {todoItem?.map((item, key) => {
                  return (
                    <>
                      <tr role="row" key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{JSON.parse(item).title}</td>
                        <td>{JSON.parse(item).description}</td>
                        <td>
                          <span
                            style={{ cursor: "pointer", color: "blue" }}
                            className="fs-3"
                            onClick={() =>
                              props.deleteTodoHandler(JSON.parse(item).ID)
                            }
                          >
                            delete
                          </span>{" "}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
