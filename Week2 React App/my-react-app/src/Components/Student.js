import React ,{useState,useEffect}from 'react'
import "./Student.css";
import axios from 'axios'
import {Link} from 'react-router-dom'



 const Student=()=> {
    const [users, setUser]= useState([]);

useEffect(()=>{
    loadUsers();
},[]);

const loadUsers = async()=>{
    const result=  await axios.get("http://localhost:4000/Users");
 setUser(result.data.reverse());
} 

const deleteUser = async id => {
    await axios.delete(`http://localhost:4000/Users/${id}`);
    loadUsers();
  };
    return (
        <div className="containers"> 

        <div className="card-header">
           <i>Student Databae</i>
           
           <button className="btns btn-outline-primary mr-2" ><Link to={"/users/add"}> Add </Link></button>
        </div>
        <div className="card-body">
        <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link class="btn btn-outline-primary mr-2"><Link to={`/users/View/${user.id}`}> View </Link></Link>
                <Link class="btn btn-outline-primary mr-2"><Link to={`/users/edit/${user.id}`}> Edit </Link></Link>
                <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>

            </td>
            </tr>

        ))
    }
  </tbody>
</table>
            </div>
        </div>
    )
}
export default Student;
