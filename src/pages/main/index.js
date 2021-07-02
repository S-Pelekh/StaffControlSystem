import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onGetUsers, setItemsPerPage } from "../../store/actions";
import { Main } from "./styled";
import { bindActionCreators } from "redux";
import RenderUsers from "../../components/renderUser/index";
import { SearchInput } from "../../components/searchInput/index";
import { SalaryFilter } from "../../components/salaryFilter/index";
import { StatusFilter } from "../../components/statusFilter/index";
import { Button } from "../../components/ui-kit/styled";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { EmtyCard } from "../../components/ui-kit/styled";
import { Modal } from "../../components/modal";
import { UsersSort } from "../../components/usersSort";

export const MainPage = () => {
  const totalUsers = useSelector((store) => store.users.length);
  const toggleClass = useSelector((store) => store.toggleClass);
  const modalClass = useSelector((store) => store.modalClass);
  const itemsPerPage = useSelector((store) => store.itemsPerPage);
  const dispatch = useDispatch();
  const fetch = bindActionCreators(onGetUsers, dispatch);

  useEffect(() => {
    fetch();
  }, [totalUsers]);

  return (
    <Main>
      <div className={`shadow ${toggleClass ? "show" : ""}`} />
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
      <UsersSort />
      <StatusFilter />
      <SalaryFilter />
      <div className={`modalWindow ${modalClass ? "open" : ""}`}>
        <Modal />
      </div>
      {totalUsers > itemsPerPage ? (
        <div
          className="showMore"
          onClick={() => dispatch(setItemsPerPage(itemsPerPage + 6))}
        >
          ПОКАЗАТЬ БОЛЬШЕ...
        </div>
      ) : (
        <div></div>
      )}
    </Main>
  );
};
