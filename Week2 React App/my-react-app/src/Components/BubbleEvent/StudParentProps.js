import React, { useState } from 'react'
import StudChildProps from './StudChildProps'
const StudParentProps= () => {
    
    const[stud,setStud]=useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:0,
        password:'',
        confirmPassword:''
    })
    const onChangeEvent = (event)=>{
       const {name,value} = event.target
        setStud((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
        console.log(stud)
    }
    return (
        <div>
            <StudChildProps changeEvent={onChangeEvent}/>
        </div>
    )
}
export default StudParentProps;