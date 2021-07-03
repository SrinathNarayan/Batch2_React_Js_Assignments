import './App.css';
import'./Components/Form.css';
import React from 'react'
import UserProfile from './Components/UserProfile';
import Form from  './Components/Form';
import'./Components/Table.css';
import Table from './Components/Table';
import Validation from './Components/validation'
function App() {
  return (
    <div >
     <UserProfile/>
     <Form/>
     <Table/>
     <Validation/>
     <weather/>
    </div>
  );
}

export default App;
// //{/* <label for="Name">Name</label>
// <input id="myInput" type="text" /> */}
// </div>