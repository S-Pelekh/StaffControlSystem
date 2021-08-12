import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { onSetNewUser } from '../../store/thunks';
import { FormStyle } from './styled';
import { Button } from '../ui-kit/styled';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { IUser } from '../../store/types';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter name'),
  position: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter position in company'),
  photo: Yup.string().required('Enter photo link'),
  entryDate: Yup.date()
    .min('2020-06-16', 'Company not created yet')
    .max(new Date(), 'This is future'),
});

export const RegForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FormStyle>
      <Link to="/users">
        <div className="backIcon">
          <BackIcon />
        </div>
      </Link>
      <Formik
        initialValues={{
          name: '',
          photo: '',
          position: '',
          salary: 0,
          status: '',
          entryDate: '',
        }}
        validateOnBlur
        validationSchema={SignupSchema}
        onSubmit={(values: IUser) => {
          onSetNewUser(values);
        }}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <h3>{t('form.create')}</h3>
            <label htmlFor={'name'}>{t('form.name')}</label>

            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" className="errors" />
            <br />
            <label htmlFor={'photo'}>{t('form.photo')}</label>
            <Field type="url" name="photo" />
            {errors.photo && touched.photo ? (
              <div className="errors">{errors.photo}</div>
            ) : null}
            <br />
            <label htmlFor={'position'}>{t('form.position')}</label>
            <Field type="text" name="position" />
            <ErrorMessage name="position" component="div" className="errors" />
            <br />
            <label htmlFor={'salary'}>{t('main.salary')}</label>
            <Field type="number" name="salary" />
            <ErrorMessage name="salary " component="div" className="errors" />
            <label htmlFor={'status'}>{t('main.status')}</label>
            <Field as="select" name="status">
              <option value=""></option>
              <option value="work">{t('main.statusFilter.work')}</option>
              <option value="vacation">
                {t('main.statusFilter.vacation')}
              </option>
              <option value="fired">{t('main.statusFilter.fired')}</option>
            </Field>

            <label htmlFor={'enterDate'}>{t('form.entryDate')}</label>
            <Field type="date" name="entryDate" />
            <ErrorMessage name="entryDate" component="div" className="errors" />
            <br />
            <Button type="submit" disabled={isSubmitting}>
              {t('form.create')}
            </Button>
          </Form>
        )}
      </Formik>
    </FormStyle>
  );
};
