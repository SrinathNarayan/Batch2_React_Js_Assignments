import "./App.css";
import './Components/Login.css';
import './Components/Add/addStudent.css';
// import { useHistory } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import AddStudent from './Components/Add/AddStudent'
import EditStudent from './Components/Edit/EditStudent'
import ViewStudent from './Components/View/ViewStudent'
import './Components/View/viewStudent.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchStudent from "./Components/Search/SearchStudent";
import './Components/Search/searchStudent.css';
import  './Components/Pagenotfound/Pagenotfound.css'
import Pagenotfound from './Components/Pagenotfound/Pagenotfound'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Dash" exact>
            {" "}
            <Dashboard />
          </Route>
          <Route path="/Login" exact>
            {" "}
            <Login />
          </Route>
         


          <Route path="/Add" component={AddStudent}></Route>
          <Route path="/Edit/:id" component={EditStudent}></Route>
          <Route path="/View/:id" component={ViewStudent}></Route>
          <Route path="/search" component={SearchStudent}></Route>
          <Route path="/" component={Pagenotfound}></Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
