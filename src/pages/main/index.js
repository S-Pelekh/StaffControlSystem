import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onGetUsers } from "../../store/actions";
import { Main } from "./styled";
import { bindActionCreators } from "redux";
import RenderUsers from "../../components/renderUser/index";
import { SearchInput } from "../../components/searchInput/index";
import { SalaryFilter } from "../../components/salaryFilter/index";
import { StatusFilter } from "../../components/statusFilter/index";
import { Button } from "../../components/ui-kit/styled";

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
      <Link to="/new_user">
        <Button>Add User</Button>
      </Link>
      <div>
        <RenderUsers />
      </div>
    </Main>
  );
};
