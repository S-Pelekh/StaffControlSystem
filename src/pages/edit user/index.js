import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormStyle } from "../../components/form/styled";
import * as Yup from "yup";

import {
  onGetUserDetails,
  onEditUser,
  setUserDetails,
} from "../../store/actions";
import { EditUserStyle } from "./styled";

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
    .max(new Date(), "This is future")
    .required("Enter date"),
});

export const EditUser = () => {
  const userDetails = useSelector((store) => store.userDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetch = bindActionCreators(() => onGetUserDetails(id), dispatch);
  useEffect(() => {
    if (!userDetails[id]) {
      fetch();
    }
  }, [id]);
  if (userDetails[id]) {
    const { name, photo, position, salary, status, entryDate } =
      userDetails[id];
    return (
      <EditUserStyle>
        <FormStyle>
          <Formik
            initialValues={{
              name: `${name}`,
              photo: `${photo}`,
              position: `${position}`,
              salary: `${salary}`,
              status: `${status}`,
              entryDate: `${entryDate}`,
            }}
            validateOnBlur
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              onEditUser(values, +id);
              dispatch(setUserDetails(+id, values));
              console.log(values, +id);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <label htmlFor={"name"}>Name Surname:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <br />

                <label htmlFor={"photo"}>Photo:</label>
                <Field type="url" name="photo" />
                {errors.photo && touched.photo ? (
                  <div>{errors.photo}</div>
                ) : null}
                <br />

                <label htmlFor={"position"}>Position:</label>
                <Field type="text" name="position" />
                <ErrorMessage name="position" component="div" />
                <br />

                <label htmlFor={"salary"}>Salary:</label>
                <Field type="number" name="salary" />
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
                  Edit!
                </button>
              </Form>
            )}
          </Formik>
        </FormStyle>
      </EditUserStyle>
    );
  } else return <EditUserStyle>Loading...</EditUserStyle>;
};
