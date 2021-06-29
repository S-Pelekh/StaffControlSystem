import React from "react";
import { useDispatch } from "react-redux";

import { Formik, Field, Form } from "formik";
import { setSalaryMin, setSalaryMax } from "../../store/actions";

export const SalaryFilter = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        salaryMin: "",
        salaryMax: "",
      }}
      onSubmit={(values) => {
        dispatch(setSalaryMin(values.salaryMin));
        dispatch(setSalaryMax(values.salaryMax));
      }}
    >
      <Form>
        <Field name="salaryMin" type="number" placeholder="min"></Field>
        <Field name="salaryMax" type="number" placeholder="max"></Field>
        <button type="submit">ok</button>
      </Form>
    </Formik>
  );
};
