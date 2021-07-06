import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import { setSalaryMin, setSalaryMax } from '../../store/actions';
import { SalaryStyled } from './styled';

export const SalaryFilter = () => {
  const toggleMenu = useSelector((store) => store.toggleMenu);
  const dispatch = useDispatch();
  return (
    <SalaryStyled className={`${toggleMenu ? 'showFilter' : ''}`}>
      <h3>ЗАРПЛАТА</h3>
      <Formik
        initialValues={{
          salaryMin: '',
          salaryMax: '',
        }}
        onSubmit={(values) => {
          dispatch(setSalaryMin(values.salaryMin));
          dispatch(setSalaryMax(values.salaryMax));
        }}>
        <Form>
          <Field name="salaryMin" type="number" placeholder="ОТ"></Field>
          <Field name="salaryMax" type="number" placeholder="ДО"></Field>
          <button type="submit">ok</button>
        </Form>
      </Formik>
    </SalaryStyled>
  );
};
