import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { onSetNewUser } from "../../store/actions";
import { FormStyle } from "./styled";
import { Button } from "../ui-kit/styled";
import { ReactComponent as BackIcon } from "../../assets/back.svg";

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
      <Link to="/users">
        <div className="backIcon">
          <BackIcon />
        </div>
      </Link>
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
            <h3>СОЗДАНИЕ</h3>
            <label htmlFor={"name"}>ИМЯ</label>

            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" className="errors" />
            <br />
            <label htmlFor={"photo"}>ФОТОГРАФИЯ</label>
            <Field type="url" name="photo" />
            {errors.photo && touched.photo ? (
              <div className="errors">{errors.photo}</div>
            ) : null}
            <br />
            <label htmlFor={"position"}>ДОЛЖНОСТЬ</label>
            <Field type="text" name="position" />
            <ErrorMessage name="position" component="div" className="errors" />
            <br />
            <label htmlFor={"salary"}>ЗАРПЛАТА</label>
            <Field type="number" name="salary" />
            <ErrorMessage name="salary " component="div" className="errors" />
            <label htmlFor={"status"}>СТАТУС</label>
            <Field as="select" name="status">
              <option value=""></option>
              <option value="work">Work</option>
              <option value="vacation">Vacation</option>
              <option value="fired">Fired</option>
            </Field>

            <label htmlFor={"enterDate"}>ДАТА НАЧАЛА РАБОТЫ</label>
            <Field type="date" name="entryDate" />
            <ErrorMessage name="entryDate" component="div" className="errors" />
            <br />
            <Button type="submit" disabled={isSubmitting}>
              CREATE
            </Button>
          </Form>
        )}
      </Formik>
    </FormStyle>
  );
};
