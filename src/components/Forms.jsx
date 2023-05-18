import React, {useState} from 'react'

const Forms = (props) =>{

  //Destructure props into "inputs" and "setInputs"
  const {inputs, setInputs} = props;

  //Create object that handles errors in form
  const[errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    email:'',
    confirmPassword:''
  });

  //Event Handler for updating fields with user input  
  const handleErrors = (e) =>{
    setInputs({...inputs, [e.target.name]: e.target.value});
    console.log(inputs);

    //check length of firstName OR lastName
    if(e.target.name == 'firstName' || e.target.name == 'lastName'){
      if(e.target.value.length < 2 && e.target.value.length !=0){
        setErrors({...errors, [e.target.name]: "Name fields must be at least 2 characters long"})
      }else{
        setErrors({...errors, [e.target.name]: ""});
      }
    }

    //check length of email address - more than 5, not empty
    if(e.target.name == 'email'){
      if(e.target.value.length < 5 && e.target.value.length !=0){
        setErrors({...errors, [e.target.name]: "Email must be at least 5 characters long"})
      }else{
        setErrors({...errors, [e.target.name]: ""});
      }
    }

    //check length of password and confirm password - more than 8, not empty
    if(e.target.name == 'password' || e.target.name == 'confirmPassword'){
      if(e.target.value.length < 8 && e.target.value.length !=0){
        setErrors({...errors, [e.target.name]: "Password fields must be at least 8 characters long"});
      }else{
        setErrors({...errors, [e.target.name]: ""});
      }
    }
  };

//   const onChange = (e) => {
//     setInputs({...inputs,
//         [e.target.name]: e.target.value}
//     );  
// };

    return (

      <div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" onChange = {handleErrors} name="firstName" />
          {errors.firstName ? <p className = "text-danger">{errors.firstName}</p>: ''}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" onChange = {handleErrors} name="lastName" />
          {errors.lastName ? <p className = "text-danger">{errors.lastName}</p>: ''}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" onChange = {handleErrors} name="email" />
          {errors.email ? <p className = "text-danger">{errors.email}</p>: ''}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" onChange = {handleErrors} name="password"/>
          {errors.password ? <p className = "text-danger">{errors.password}</p>: ''}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="text" onChange = {handleErrors} name="confirmPassword"/>
          {errors.confirmPassword ? <p className = "text-danger">{errors.confirmPassword}</p>: ''}
        </div>
        <div>
          {(inputs.password != inputs.confirmPassword) ? <p className = "text-danger"> Password and Confirm Password must match</p>: ''}
        </div>
      </div>
      
    )
}


export default Forms