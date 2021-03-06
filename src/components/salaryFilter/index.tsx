import React from 'react';
import { useTranslation } from 'react-i18next';

import { Formik, Field, Form } from 'formik';
import { setSalaryMin, setSalaryMax } from '../../store/actions';
import { SalaryStyled } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export const SalaryFilter: React.FC = () => {
  const toggleMenu = useAppSelector(store => store.toggleMenu);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <SalaryStyled className={`${toggleMenu ? 'showFilter' : ''}`}>
      <h3>{t('main.salary')}</h3>
      <Formik
        initialValues={{
          salaryMin:0,
          salaryMax: 0,
        }}
        onSubmit={(values) => {
          dispatch(setSalaryMin(values.salaryMin));
          dispatch(setSalaryMax(values.salaryMax));
        }}>
        <Form>
          <Field name='salaryMin' type='number' placeholder='ОТ'/>
          <Field name='salaryMax' type='number' placeholder='ДО'/>
          <button type="submit">ok</button>
        </Form>
      </Formik>
    </SalaryStyled>
  );
};
