import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Api from "../../helpers/api";
import { setUsers } from "../../store/actions";
import { Main, IconBlock } from "./styled";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/close.svg";

export const MainPage = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      Api.getPeople().then((data) => {
        dispatch(setUsers(data));
      });
    }
  }, [users.length]);

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
          <IconBlock>
            <EditIcon />
          </IconBlock>
          <IconBlock>
            <DelIcon />
          </IconBlock>
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
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </Main>
  );
};
