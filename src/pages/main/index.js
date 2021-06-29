import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { onGetUsers } from "../../store/actions";
import { Main } from "./styled";
import { bindActionCreators } from "redux";
import RenderUsers from "../../components/renderUser/index";
import { SearchInput } from "../../components/searchInput/index";
import { SalaryFilter } from "../../components/salaryFilter/index";
import { StatusFilter } from "../../components/statusFilter/index";

export const MainPage = () => {
  const totalUsers = useSelector((store) => store.users.length);
  const dispatch = useDispatch();
  const fetch = bindActionCreators(onGetUsers, dispatch);

  useEffect(() => {
    fetch();
  }, [totalUsers]);

  return (
    <Main>
      <SearchInput />
      <table>
        <caption>Staff</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>
              Salary:
              <SalaryFilter />
            </th>
            <th>
              Status:
              <StatusFilter />
            </th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          <RenderUsers />
        </tbody>
      </table>
    </Main>
  );
};
