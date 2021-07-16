import React, { useState, useEffect } from "react";
import '../View/viewStudent.css'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

 const ViewStudent=()=> {
  const { id } = useParams();
  const [student, setStudent] = useState({
    id: Math.random(),
    name: "",
    dept: "",
    Email: "",
    password: "",
  });

const loadstudent= async () =>{
  const res = await  axios.get(`http://localhost:4000/students/${id}`);
  setStudent(res.data);
};

useEffect(()=>{
loadstudent();
},[]);
    return (
        <div>
          <div className="header">
        <h3>VIEW DETAILS</h3>
        </div>
  <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
      <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png" alt=""/>
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">{student.name}</div>
    <div class="about">{student.dept}</div>
    
    <div class="mail">
      <span>{student.Email}</span>
    </div>
    <div class="social-share">
      <div class="row">
        <i class="far fa-heart"></i>
        <i class="icon-2 fas fa-heart"></i>
        <span>{student.password}</span>
      </div>
      
      <div class="row">
        <i class="fas fa-share"></i>
        <span>{student.id}</span>
      </div>
    </div>
  </div>
  <a class="yt-link" >
      <Link to={"/Dash"}>
        Back &nbsp;</Link>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
        </div>
    )
}
export default ViewStudent;
