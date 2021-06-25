import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  onGetUsers,
  onSearch,
  onStatusSort,
  setSalaryMin,
  setSalaryMax,
} from "../../store/actions";
import { Main } from "./styled";
import { bindActionCreators } from "redux";
import { RenderUsers } from "../../components/renderUser/index";
import { Formik, Field, Form } from "formik";

export const MainPage = () => {
  const totalUsers = useSelector((store) => store.users.length);
  const keyWords = useSelector((store) => store.keyWords);
  const dispatch = useDispatch();
  const fetch = bindActionCreators(onGetUsers, dispatch);

  useEffect(() => {
    fetch();
  }, [totalUsers]);

  return (
    <Main>
      <input
        type="text"
        placeholder="Input name"
        value={keyWords}
        onChange={(el) => dispatch(onSearch(el.target.value))}
      />
      <table>
        <caption>Staff</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>
              Salary:
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
                  <Field
                    name="salaryMin"
                    type="number"
                    placeholder="min"
                  ></Field>
                  <Field
                    name="salaryMax"
                    type="number"
                    placeholder="max"
                  ></Field>
                  <button type="submit">ok</button>
                </Form>
              </Formik>
            </th>
            <th>
              Status:
              <select
                name="statusSelect"
                defaultValue="all"
                onChange={(el) => dispatch(onStatusSort(el.target.value))}
              >
                <option value="all">all</option>
                <option value="work">work</option>
                <option value="vacation">vacation</option>
                <option value="fired">fired</option>
              </select>
            </th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>{RenderUsers()}</tbody>
      </table>
    </Main>
  );
};
