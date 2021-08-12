import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormStyle } from '../../components/form/styled';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { setUserDetails } from '../../store/actions';
import { onGetUserDetails, onEditUser } from '../../store/thunks';
import { EditUserStyle } from './styled';
import { Button } from '../../components/ui-kit/styled.js';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import {  InitState, IUser } from '../../store/types';
import { useAppSelector } from '../../hooks/Store Hooks/hooks';

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
    .max(new Date(), 'This is future')
    .required('Enter date'),
});

export const EditUser = () => {

  const userDetails = useAppSelector(store => store.userDetails);
  const dispatch = useDispatch();
  const params = useParams()
  console.log(params)
  const {id} = useParams<{id: string}>() ;
  const fetch = bindActionCreators(() => onGetUserDetails(+id), dispatch);
    useEffect(() => {
    if (!userDetails[+id]) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails[+id]]);
  if (userDetails[+id]) {
    const { name, photo, position, salary, status, entryDate } =
      userDetails[+id];
    return (
      <EditUserStyle>
        <FormStyle>
          <Link to="/users">
            <div className="backIcon">
              <BackIcon />
            </div>
          </Link>
          <Formik
            initialValues={{
              name: `${name}`,
              photo: `${photo}`,
              position: `${position}`,
              salary: salary,
              status: `${status}`,
              entryDate: `${entryDate}`,
            }}
            validateOnBlur
            validationSchema={SignupSchema}
            onSubmit={(values: IUser) => {
              onEditUser(values, +id);
              dispatch(setUserDetails(+id, [values]));
            }}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <h3>РЕДАКТИРОВАНИЕ</h3>
                <label htmlFor={'name'}>Name Surname:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <br />

                <label htmlFor={'photo'}>Photo:</label>
                <Field type="url" name="photo" />
                {errors.photo && touched.photo ? (
                  <div>{errors.photo}</div>
                ) : null}
                <br />

                <label htmlFor={'position'}>Position:</label>
                <Field type="text" name="position" />
                <ErrorMessage name="position" component="div" />
                <br />

                <label htmlFor={'salary'}>Salary:</label>
                <Field type="number" name="salary" />
                <label htmlFor={'status'}>СТАТУС</label>
                <Field as="select" name="status">
                  <option value="work">Work</option>
                  <option value="vacation">Vacation</option>
                  <option value="fired">Fired</option>
                </Field>
                <label htmlFor={'enterDate'}>Enter date:</label>
                <Field type="date" name="entryDate" />
                <ErrorMessage name="entryDate" component="div" />
                <br />
                <Button type="submit" disabled={isSubmitting}>
                  Edit!
                </Button>
              </Form>
            )}
          </Formik>
        </FormStyle>
      </EditUserStyle>
    );
  } else return <EditUserStyle>Loading...</EditUserStyle>;
};
