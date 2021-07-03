import React from 'react';
import { useFormik } from 'formik';

import * as Yup from 'yup';
export default function Form() 
{
    const validationSchema=Yup.object(
    {
        firstname:Yup.string().required("firstname required"),
        lastname:Yup.string().required("lastname required"),
        
        age:Yup.number().required(" age is requires").min(18, "you must be at least 18 years")
        .max(60, "you must be at most 60 years"),

        
        phone:Yup.string().required("this field is required").min(10,"invalid contact number").max(10, "invalid contact number"),
                 
        email:Yup.string().required("this field is required").email("email not valid"),
    }
    )
    const {handleSubmit,handleChange,values,errors}=useFormik(
        {
           initialValues:{
               firstname:'',
               lastname:'',
               age:'',
               phone:'',
               email:''
           },
           validationSchema,
           onSubmit(values)
           {
               console.log("form is submitted");
               console.log(values);
           }
        }
    )

    return (
        <div>
          <form onSubmit={handleSubmit} noValidate>
              <div>
          <label>firstname</label>
          <input type="text" name="firstname" onChange={handleChange} values={values.firstname} />
          {errors.firstname ? errors.firstname:null}
          </div>
          <div>
          <label>lastname</label>
          <input type="text" name="lastname" onChange={handleChange} values={values.lastname} />
          {errors.lastname ? errors.lastname:null}
          </div>
          <div>
          <div>
          <label>age</label>
          <input type="Number" name="age" onChange={handleChange} values={values.age} />
          {errors.age ? errors.age:null}
          </div>
          <div>
          <label>phone</label>
          <input type="number" name="phone" onChange={handleChange} values={values.phone} />
          {errors.phone ? errors.phone:null}
          </div>
          <div>
          <label>email</label>
          <input type="text" name="email" onChange={handleChange} values={values.email} />
          {errors.email? errors.email:null}
          </div>
          <button type="submit">Submit</button>
        </div>
          </form>
        </div>
    )
}