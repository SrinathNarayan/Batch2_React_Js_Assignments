import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
const Table = () => {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("");
  const getdetailsdata = async () => {
    try {
      const response = await axios.get("http://localhost:4000/students");

      console.log(response.data);
      setproduct(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getdetailsdata();
  }, []);

  return (
    <div>
      <div className="containes">
        <div class="card">
          <div class="card-header">
            <br />
            <input
              className="form-control"
              type="text"
              placeholder="search here"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
          </div>
          <div class="card-body">
            <h4>Json data From Child Component</h4>
            <h5 class="card-title">List Of Trainees</h5>

            <p class="card-text">
              {product
                .filter((item) => {
                  if (search == " ") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <>
                      <p>Name: {item.name}</p>
                      <i>City: {item.city}</i>
                    </>
                  );
                })}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
