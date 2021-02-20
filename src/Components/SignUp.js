import React from "react";
import { Form, Field } from "react-final-form";


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
          
        <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>UserName</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="firstname">
            {({ input, meta }) => (
              <div>
                <label>Firstname</label>
                <input {...input} type="text" placeholder="Firstname" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="lastname">
            {({ input, meta }) => (
              <div>
                <label>UserName</label>
                <input {...input} type="text" placeholder="LastName" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>



          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>


          <Field name="dob">
            {({ input, meta }) => (
              <div>
                <label>dob</label>
                <input {...input} type="dob" placeholder="dd//mm/yy" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>



          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          

{/* 
          <Field name="password">
            {({ input, meta }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Very secure passsword"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              );
            }}
          </Field> */}



        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

export default SignUp;
