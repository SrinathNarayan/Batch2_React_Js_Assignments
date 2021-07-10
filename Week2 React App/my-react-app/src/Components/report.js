import React, { useEffect, useState } from "react";
import axios from "axios";
import "./report.css";
const Report = () => {
  const [city, setCity] = useState("");
  const [student, setStudent] = useState([]);

  const onChangeEvent = (event) => {
    // const {name,value} =event.target;
    setCity(event.target.value);
    console.log(city);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((response) => {
        setStudent(response.data);
        console.log(student);
      })
      .catch((err) => console.log("=======>" + err));
  }, []);

  return (
    <div>
     

      <div className="container">
          <div className="card">
        <div className="card-header">
            <i><label> Select The City</label></i>
            <br/>
        <select className="form-select" onChange={onChangeEvent}>
        <option disabled>Open this select menu</option>
        {student.map((d) => {
          return <option value={d.city}>{d.city}</option>;
        })}
      </select>
        </div>
        <div className="card-body">
          {student
            .filter((x) => x.city == city)
            .map((d) => {
              return (
                <>
                  <h3> Id: {d.id}</h3>
               <b><h4>City: {d.city}</h4></b>
                  <i><h4>Name: {d.name}</h4></i>
                 <i><h4>Age: {d.age}</h4></i>
                 <br/>
                </>
              );
            })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
