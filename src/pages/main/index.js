import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onGetUsers, onRemoveUser, setUsers } from "../../store/actions";
import { Main, IconBlock } from "./styled";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/close.svg";
import { bindActionCreators } from "redux";

export const MainPage = () => {
  const users = useSelector((store) => store.users);
  const totalUsers = useSelector((store) => store.users.length);
  const dispatch = useDispatch();
  const fetch = bindActionCreators(onGetUsers, dispatch);
  const delUser = (users, id) => {
    const index = users.findIndex((el) => el.id === id);
    users.splice(index, 1);
    dispatch(setUsers(users));
  };
  useEffect(() => {
    fetch();
  }, [totalUsers]);
  const renderUsers = () => {
    return users.map(({ id, name, photo, salary, status }) => (
      <tr key={`user-${id}`}>
        <td>
          <Link to={`/user/${id}`}>{id}</Link>
        </td>
        <td>
          <img src={photo} alt="Phot" />
        </td>
        <td>
          <Link to={`/user/${id}`}>{name}</Link>
        </td>

        <td>{salary}</td>
        <td>{status}</td>
        <td>
          <Link to={`/edit_user/${id}`}>
            <IconBlock>
              <EditIcon />
            </IconBlock>
          </Link>
        </td>
        <td>
          <button
            onClick={() => {
              onRemoveUser(id);
              delUser(users, id);
            }}
          >
            <IconBlock>
              <DelIcon />
            </IconBlock>
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <Main>
      <table>
        <caption>Staff</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </Main>
  );
};
