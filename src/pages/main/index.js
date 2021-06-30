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
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { EmtyCard } from "../../components/ui-kit/styled";

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
      <div className="newUserLink">
        <Link to="/new_user">
          <Button>
            <CrossIcon />
            Добавить сотрудника
          </Button>
        </Link>
      </div>
      <div className="usersBlock">
        <RenderUsers />
        <EmtyCard />
        <EmtyCard />
      </div>
    </Main>
  );
};
