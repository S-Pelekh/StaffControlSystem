import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onRemoveUser, setUsers } from "../../store/actions";
import { IconBlock } from "../../pages/main/styled";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/close.svg";

export const TableRaw = (users) => {
  const dispatch = useDispatch();
  const { id, photo, name, salary, status } = users;
  const delUser = (users, id) => {
    const index = users.findIndex((el) => el.id === id);
    users.splice(index, 1);
    dispatch(setUsers(users));
  };
  return (
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
  );
};
