import React from "react";
import { useForm } from "react-hook-form";
import content from "../Static";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Username: Yup.string().required(),
  Password: Yup.string().required().min(5),
  Email: Yup.string().required(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (Data) => console.log(Data);
  console.log(errors);

  return (
    <div>
      <div className="containers">
        <div className="head__section">
          <h4>React Hook From</h4>
        </div>

        <div className="display__product">
          {
            /* 
                    <img src="https://freepngimg.com/thumb/shoes/55582-9-sneakers-download-free-image-thumb.png" alt=""/> */
            <img
              src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png"
              alt=""
            />
          }
          <div className="slider">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </div>
        <div className="product__details">
          <div className="title__section">
            <div className="title">
              <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => {
                  return (
                    <div key={key}>
                      <p>
                        <label>{input.lable} </label>
                      </p>

                      <p>
                        <input
                          name={input.name}
                          type={input.type}
                          {...register(input.name)}
                        />
                      </p>
                      <div className="messages">
                        {" "}
                        <p>{errors[input.name]?.message}</p>
                      </div>
                    </div>
                  );
                })}
                <br />
                <p>
                  ..{" "}
                  <button>
                    <i className="fi-sr-shopping-cart-add" type="submit"></i>
                    Submit
                  </button>
                </p>
              </form>
            </div>
            <span>
              {/* <i className="fi-sr-star"></i>
                                <p>(4.5)</p> */}
            </span>
          </div>
          <div className="product__size">
            {/* <p>size:</p>
                            <ul>
                                <li>US 7</li>
                                <li>US 8</li>
                                <li>US 9</li>
                                <li>US 10</li>
                            </ul> */}
          </div>
          <div className="product__colors">
            {/* <p>Available Colors:</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> */}
          </div>
          {/* <div className="product__add">
                            <span className="price">$249</span>
                            <button><i className="fi-sr-shopping-cart-add"></i>Add To Cart</button>
                        </div> */}
        </div>
      </div>
    </div>
  );
}
