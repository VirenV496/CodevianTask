import React from "react";
import { Form, Field } from "react-final-form";
import Input from "../../utils/constants/formConstants/Input";



const onSubmit = values => {
  return new Promise(resolve => {
      setTimeout(() => {
      window.alert(JSON.stringify(values, 0, 2));
      resolve();
    }, 1000);
  });
};

const Login = () => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      const errors = {};
       



      if (!values.firstname) {
        errors.firstname = 'Required'
      }
      
      if (!values.email !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.email) {
          errors.email = "Please enter valid email address.";
        }
      
      }
      if (!values.username) {
        errors.username = 'Required'
      }

      if (!values.password) {
        errors.password = "Password is empty";
      } else if (values.password.length < 8) {
        errors.password = "Password is too short";
      }

      return errors;
    }}
    render={({ handleSubmit, values, submitting, pristine, dirty }) => (
      <form onSubmit={handleSubmit}>
          <h1>User Login</h1>

           <div>
        
            <Field  type="text" placeholder="FirstName"  
                name="firstName"
                component={Input}
                labelName="First  fdfdg"
               
              />  
                  
              

      
            <Field  type="email" placeholder="Email"  
                name="email"
                component={Input}
                labelName="Email"
               
              />

      
            <Field  type="text" placeholder="Username"  
                name="username"
                component={Input}
                labelName="First name"
               
              />

       
            <Field  type="text" placeholder="Password"  
                name="password"
                component={Input}
                labelName="password"
               
              />

        
            <Field  
                type="text" 
                placeholder="Confirm Password"  
                name="Confirm-Password"
                component={Input}
                labelName="confirm password"
               
              />


      <pre>{JSON.stringify(values, undefined, 2)}</pre>

        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

export default Login;
