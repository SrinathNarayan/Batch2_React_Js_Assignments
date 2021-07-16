import React, {useState, useEffect} from 'react'
import'../Components/Dashboard.css';
import {  Link } from "react-router-dom";
import Axios from 'axios'
import axios from 'axios';

 const Dashboard=()=> {
  const[student,setStudent]= useState([]);

useEffect(() =>{
loadStudents();

},[]);
 const loadStudents =  async () => {
  
  const result =  await Axios.get(`http://localhost:4000/students`);
  setStudent(result.data.reverse());
}

const deleteStudent=  async id =>{
await axios.delete(`http://localhost:4000/students/${id}` , student);
loadStudents();
}
    return (


        <div>
{/* Nav Bar */}
  
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ERP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav  mb-2 mb-md-0 ml-auto">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#"> {" "}
              <Link to={"/Dash"}>Home</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              {" "}
              <Link to={"/Add"}>Add Student</Link>
              </a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="#"><Link to={"/search"}>Search</Link></a>
            </li>
          </ul>
          <div class="d-flex">
            <a class="btn" type="submit"> <Link to={"/login"}>Logout</Link></a>
          </div>
        </div>
      </div>
    </nav>


{/* Table */}
<div class="container">
      <table class="neumorphic">
	<thead>
	  <tr>
	    <th>Name</th>
	    <th>Position</th>
	    <th>Email</th>
	    <th>Action</th>
	  </tr>
	</thead>
	<tbody>

{
  student.map((student,index)=>(
    <tr>
      <td>{student.name}</td>
      <td>{student.dept}</td>
      <td>{student.Email}</td>
      <td>
     <button class="custom-btn btn-6"><span><Link to={`/Edit/${student.id}`}>Edit</Link></span></button>
     <button class="custom-btn btn-6"><span><Link to={`/View/${student.id}`}>View</Link></span></button>
     <button class="custom-btn btn-6" onClick={()=>deleteStudent(student.id)}><span>Delete</span></button>
     </td>
    </tr>
  ))
}

	  {/* <tr>
	    <td>{}</td>
	    <td></td>
	    <td></td>
      <td>
     <button class="custom-btn btn-6"><span>Edit</span></button>
     <button class="custom-btn btn-6"><span>View</span></button>
     </td>
	</tr> */}
	</tbody>
  </table>
  </div>
  </div>
    )
}
export default Dashboard;