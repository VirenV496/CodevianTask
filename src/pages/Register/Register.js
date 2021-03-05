import React from "react";
import { Form, Field } from "react-final-form";
import Input from '../../utils/constants/formConstants/Input';


 const onSubmit = values => {
  return new Promise(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, 0, 2));
      resolve();
    }, 1000);
  });
}; 

const SignUp = () => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
       const errors = {};

      if (!values.username) {
        errors.username = 'Required'
      }

      if (!values.firstname) {
        errors.firstname = 'Required'
      }

      
      if (!values.email !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if (!pattern.email) {
          errors.email = "Enter valid email address.";
        }
      
      }

      
      if (!values.lastname) {
        errors.lastname = 'Required'
      }

      

      if (!values.password) {
        errors.password = "Password is empty";
      } else if (values.password.length < 8) {
        errors.password = "Password is too short";
      }

      console.log(errors);

      return errors;
    }}
    render={({ handleSubmit, values, submitting }) => (
      <form onSubmit={handleSubmit}>

          <h1>UserSignUp</h1>
        <div>

        <div>
            <Field  type="text" placeholder="Username"  
                name="username"
                component={Input}
                labelName="Username"
               // validate={required}
              />
        </div>
          

         <div>
            <Field  type="text" placeholder="FirtName"  
                name="firstName"
                component={Input}
                labelName="First name"
               // validate={required}
              />  
         </div>

        <div>
            <Field  type="text" placeholder="LastName"  
                name="LastName"
                component={Input}
                labelName="Last name"
               // validate={required}
              />
        </div>
            <Field  type="email" placeholder="Email"  
                name="Email"
                component={Input}
                labelName="Email"
               // validate={required}
              />    


          <div>
          <Field  type="Dob" placeholder="Dob"  
                name="dob"
                component={Input}
                labelName="DOB"
               // validate={required}
              />  
          </div>
           
         <div>
            <Field  type="text" placeholder="Password"  
                name="password"
                component={Input}
                labelName="password"
               // validate={required}
              />  
         </div>
            


           <div>
          
            <Field  type="text" placeholder="Confirm Password"  
                name="confirmpassword"
                component={Input}
                labelName="confirm password"
              /> 
             </div> 

        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

export default SignUp;
