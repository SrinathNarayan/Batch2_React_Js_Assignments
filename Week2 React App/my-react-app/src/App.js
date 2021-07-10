import "./App.css";
import "./Components/report.css";
import "./Components/Form.css";
import "./Components/Weather.css";
import React from "react";
import UserProfile from "./Components/UserProfile";
import Form from "./Components/Form";
import "./Components/Table.css";
import Table from "./Components/Table";
import Validation from "./Components/validation";
import Report from "./Components/report";
import Weather from "./Components/weather";
import "./Components/validation.css";
import Student from "./Components/Student";
import "./Components/Student.css";
import Adduser from "./Components/Users/Adduser";
import Edit from "./Components/Users/Edit";
import View from "./Components/Users/View";
import Waethers from "./Components/WeatherApi/Waethers";
import "./Components/WeatherApi/Weathers.css";
import "./Components/WeatherApi/modules/CityComponent.css";
import ComponentA from "./Components/Observal/ComponentA";
import StudParentProps from './Components/BubbleEvent/StudParentProps'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* Top Nav Bar */}
        <div className="App">
          <nav className="nav nav-pills nav-justified">
            <a className="nav-item nav-link active" href="#">
              <Link to={"/"}>Home</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              {" "}
              <Link to={"/User"}>User Profile</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              {" "}
              <Link to={"/Table"}> Trainee Info</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              {" "}
              <Link to={"/Form"}>Login Validation</Link>
            </a>
            <a className="nav-item nav-link " href="#">
              {" "}
              <Link to={"/Validation"}> Student Validation</Link>
            </a>
            <a className="nav-item nav-link " href="#">
              {" "}
              <Link to={"/Weather"}> Weather Report</Link>{" "}
            </a>
            <a className="nav-item nav-link ">
              {" "}
              <Link to={"/Report"}> Student Info </Link>
            </a>
          </nav>

          {/* SideBar */}
          <div class="sidebar">
            <a class="active" href="#home">
              Home
            </a>
            <a>
              <Link to={"/Student"}> Student </Link>
            </a>
            <a href={"/Weathers"}>Weather Api</a>
            <a href="#about">
              <Link to={"/subject"}> Message </Link>
            </a>
            <a href= "#about"><Link to={"/students"}> BubbleEvent </Link></a>   
          </div>

          {/* Router Path */}
          <Switch>
            <Route path="/User" exact>
              {" "}
              <UserProfile />
            </Route>
            <Route path="/users/add" component={Adduser}></Route>
            <Route path="/users/edit/:id" component={Edit}></Route>
            <Route path="/Weathers" component={Waethers}></Route>
            <Route path="/Student" component={Student}></Route>
            <Route path="/users/view/:id" component={View}></Route>
            <Route path="/students" component={StudParentProps}></Route>
            <Route path="/Table" exact>
              <Table />{" "}
            </Route>
            <Route path="/Form" exact>
              <Form />
            </Route>
            <Route path="/Validation" exact>
              <Validation />
            </Route>
            <Route path="/Weather" exact>
              <Weather />
            </Route>
            <Route path="/Report" exact>
              <Report />
            </Route>
            <Route path="/subject" exact>
              <ComponentA />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
