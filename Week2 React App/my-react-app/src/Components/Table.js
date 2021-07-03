import { useEffect,useState } from 'react'
import './Table.css';
import axios from "axios";
const Table = () => {
const [product,setproduct]=useState([])
const[search,setsearch]=useState("")
    const getdetailsdata = async () => {
        try {
            const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
            console.log(data.data);
            setproduct(data.data);
        }
        catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getdetailsdata();
    },[]);

    return (
        <div>


<div class="card">
  <div class="card-header">
      <br/>
  <input 
            type="text"
            placeholder="search here"
            onChange={e=>{
                setsearch(e.target.value);
            }}
                />

  </div>
  <div class="card-body">
      <h4>Json data From Child Component</h4>
    <h5 class="card-title">List of products</h5>
    
    <p class="card-text">{product.filter(item=>{
    if(search == " "){
        return item
    }
    else if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item
    }
}).map(item=>{
  return<p>{item.name}</p>  
})}.</p>
    
  </div>
</div>
        </div>
    )
}
export default Table;