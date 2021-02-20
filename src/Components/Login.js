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

const Login = () => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      const errors = {};

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

      console.log(errors);

      return errors;
    }}
    render={({ handleSubmit, values, submitting }) => (
      <form onSubmit={handleSubmit}>

          <h1>User Login</h1>
        <div>
       


         
        <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>email</label>
                <input {...input} type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>UserName</label>
                <input {...input} type="text" placeholder="Username" />
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

        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

export default Login;
