import React, { useState,useEffect } from "react";
import '../Search/searchStudent.css';
import {  Link } from "react-router-dom";
import axios from "axios";

 const SearchStudent=()=> {
  const [student, setStudent] = useState({
    id:'',
    name: "",
    dept: "",
    Email: "",
    password: ""
  });

  const[studname,setStudname]=useState({});
  // const loadstudent= async () =>{
  //   const res = await  ;
  //   setStudent(res.data);
  //   console.log(res.data);
  // };
  const onChangevalue = (e) =>{
   setStudname(e.target.value)
   console.log(studname)
    
  }
  const onClickEvent=(e)=>{
    e.preventDefault();
 
    axios.get(`http://localhost:4000/students?name=${studname}`,student).then(
      res =>{
     setStudent(res.data)
     console.log(res.data)
      }
    )
   
  }
  // useEffect(()=>{
  //   loadstudent( )
  // },[]);
    return (
        <div>
             <div class="content">
        <form class="search">
            <input class="search__input" placeholder="Search" type="text" name="search" onChange={onChangevalue}/>
            <button class="search__btn container-center" onClick={onClickEvent}>
                <i class="fas fa-search"></i>
            </button>
        </form>
    </div>


    {/* card */}

    <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
      <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png" alt=""/>
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">{student.name}</div>
    <div class="about">Designer & Developer</div>
    
    <div class="mail">
      <span>Email</span>
    </div>
    <div class="social-share">
      <div class="row">
        <i class="far fa-heart"></i>
        <i class="icon-2 fas fa-heart"></i>
        <span>20.4k</span>
      </div>
      
      <div class="row">
        <i class="fas fa-share"></i>
        <span>12.8k</span>
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
export default SearchStudent;