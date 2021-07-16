import React, { useState, useEffect } from "react";
import "../Add/addStudent.css";

import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const history = useHistory();
  const [student, setStudent] = useState({
    id: Math.random(),
    name: "",
    dept: "",
    Email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // const { name, dept, email, password } = student;

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:4000/students/${id}`);
    console.log(result.data);
    setStudent(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/students/${id}` , student);
    history.push("/Dash");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h6>Full Name</h6>
          <input
            type="text"
            placeholder="For ex. Srinath Narayan"
            name="name"
            value={student.name}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <h6>Who are you?</h6>
          <input
            type="radio"
            name="dept"
            id="developer"
            value={student.dept}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="radio"
            name="dept"
            id="designer"
            value="designer"
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <h6>Email</h6>
          <input
            type="email"
            placeholder="Name123@xyz.com"
            name="Email"
            value={student.Email}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="form-group">
          <h6>Password</h6>
          <input
            type="password"
            placeholder="Minimum 6 characters "
            name="password"
            value={student.password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button class="submit">Update</button>
      </form>
      <a class="yt-link">
        <Link to={"/Dash"}>Back &nbsp;</Link>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
    </div>
  );
};
export default EditStudent;
