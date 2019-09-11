import React from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./BasicFormSchema";
import { Input, Button } from 'antd';

const SignUp = () => (
  <div className="container">
    <h2>Пройдите регистрацию, пожалуйста: </h2>
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: ""
      }}
      validationSchema={BasicFormSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form className="form-container">
          <label htmlFor="username">Login</label>
          <Field name="username" placeholder="login" type="text" 
          render={({ field, form: { isSubmitting } }) => (
            <Input {...field} disabled={isSubmitting} />
          )} 
          />

          {errors.username &&
            touched.username && (
              <div className="field-error">{errors.username}</div>
            )}

          <label htmlFor="email">Email</label>
          <Field
            name="email"
            placeholder="mtarasov777@gmail.com"
            type="email"
            render={({ field, form: { isSubmitting } }) => (
              <Input {...field} disabled={isSubmitting} />
            )} 
          />

          {errors.email &&
            touched.email && <div className="field-error">{errors.email}</div>}

          <label >Phone</label>
          <Field name="phone" placeholder="phone" type="phone" 
          render={({ field, form: { isSubmitting } }) => (
            <Input {...field} disabled={isSubmitting} />
          )} 
          />

          {errors.username &&
            touched.username && (
              <div className="field-error">{errors.username}</div>
            )}

          <label htmlFor="password">Password</label>
          <Field name="password" placeholder="123456qwe" type="password" 
          render={({ field, form: { isSubmitting } }) => (
            <Input {...field} disabled={isSubmitting} />
          )} 
          />

          {errors.password &&
            touched.password && (
              <div className="field-error">{errors.password}</div>
            )}

         
          <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
        </Form>
      )}
    />
  </div>
);

export default SignUp;
