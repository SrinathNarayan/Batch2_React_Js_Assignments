import React from "react";
import { useFormik } from "formik";
import "./validation.css";
import * as Yup from "yup";
export default function Form() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name required..."),
    lastname: Yup.string().required("Last Name required..."),

    age: Yup.number()
      .required(" Age is required..")
      .min(18, "you must be at least 18 years")
      .max(60, "you must be at most 60 years"),

    phone: Yup.string()
      .required("This field is required....")
      .min(10, "invalid contact number")
      .max(10, "invalid contact number"),

    email: Yup.string()
      .required("This field is required...")
      .email("email not valid"),
  });
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      phone: "",
      email: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log("form is submitted");
      console.log(values);
    },
  });

  return (
    <div>
      <div className="conatiners">
        <div className="card">
          <div className="card-header">
            <i>
              <h2>Registration</h2>
            </i>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <b>
                  <label>First Name</label>
                </b>
                <br />
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  values={values.firstname}
                />
                <br />
                <i> {errors.firstname ? errors.firstname : null}</i>
              </div>
              <div>
                <b>
                  <label>Last Name</label>
                </b>
                <br />
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  values={values.lastname}
                />
                <br />
                <i>{errors.lastname ? errors.lastname : null}</i>
              </div>
              <div>
                <div>
                  <b>
                    <label>Age</label>
                  </b>
                  <br />
                  <input
                    type="Number"
                    name="age"
                    onChange={handleChange}
                    values={values.age}
                  />
                  <br />
                  <i>{errors.age ? errors.age : null}</i>
                </div>
                <div>
                  <b>
                    {" "}
                    <label>Phone</label>
                  </b>
                  <br />
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    values={values.phone}
                  />
                  <br />
                  <i>{errors.phone ? errors.phone : null}</i>
                </div>
                <div>
                  <b>
                    {" "}
                    <label>E-mail</label>
                  </b>
                  <br />
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                  />
                  <br />
                  <i> {errors.email ? errors.email : null}</i>
                </div>
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    
    
    </div>
  );
}
