import React from 'react'

const Results = (props) => {

    //Destructure props into the paramenters of the form
    const {firstName, lastName, email, password, confirmPassword} = props.data;

  return (
    <div>
        <h2>Your Form Data</h2>
        <ul>
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Email: {email}</li>
            <li>Password: {password}</li>
            <li>Confirm Password: {confirmPassword}</li>
        </ul>
    </div>
  )
}

export default Results