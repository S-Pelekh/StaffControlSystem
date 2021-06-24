import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { onSetNewUser } from "../../store/actions";
import { FormStyle } from "./styled";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Enter name"),
  position: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Enter position in company"),
  photo: Yup.string().required("Enter photo link"),
  entryDate: Yup.date()
    .min("2020-06-16", "Company not created yet")
    .max(new Date(), "This is future"),
});

export const RegForm = () => {
  return (
    <FormStyle>
      <Formik
        initialValues={{
          name: "",
          photo: "",
          position: "",
          salary: "",
          status: "",
          entryDate: "",
        }}
        validateOnBlur
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          onSetNewUser(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor={"name"}>Name Surname:</label>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <br />
            <label htmlFor={"photo"}>Photo:</label>
            <Field type="url" name="photo" />
            {errors.photo && touched.photo ? <div>{errors.photo}</div> : null}
            <br />
            <label htmlFor={"position"}>Position:</label>
            <Field type="text" name="position" />
            <ErrorMessage name="position" component="div" />
            <br />
            <label htmlFor={"salary"}>Salary:</label>
            <Field type="number" name="salary" />
            <ErrorMessage name="salary " component="div" />
            <div id="my-radio-group">Status:</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="status" value="work" />
                Work
              </label>
              <label>
                <Field type="radio" name="status" value="fired" />
                Fired
              </label>
              <label>
                <Field type="radio" name="status" value="vacation" />
                Vacation
              </label>
            </div>
            <label htmlFor={"enterDate"}>Enter date:</label>
            <Field type="date" name="entryDate" />
            <ErrorMessage name="entryDate" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Add User
            </button>
          </Form>
        )}
      </Formik>
    </FormStyle>
  );
};
