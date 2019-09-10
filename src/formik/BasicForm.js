import React from "react";
import { Formik, Form } from "formik";
import BasicFormSchema from "./BasicFormSchema";
import { Input, Button } from 'antd';

const SignUp = () => (
  <div className="container">
    <h1>Пройдите регистрацию, пожалуйста:</h1>
    <Formik
      initialValues={{
        login: "",
        email: "",
        phone: "",
        password: ""
      }}
      validationSchema={BasicFormSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <label>Login</label>
          <Input
            name="login"
            placeholder="login"
            type="text"
          />
          <br/>
          <label>Email</label>
          <Input
            name="email"
            placeholder="mtarasov777@gmail.com"
            type="email"
          />

          {errors.email &&
            touched.email && <div className="field-error">{errors.email}</div>}
          <br/>
          <label>Phone</label>
          <Input name="phone" placeholder="7770001122" type="phone" />

          {errors.username &&
            touched.username && (
              <div className="field-error">{errors.username}</div>
            )}
            <br/>

          <label>Password</label>
          <Input name="password" placeholder="123456qwe" type="password" />

          {errors.password &&
            touched.password && (
              <div className="field-error">{errors.password}</div>
            )}
            <br/>

            <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
        </Form>
      )}
    />
  </div>
);

export default SignUp;
