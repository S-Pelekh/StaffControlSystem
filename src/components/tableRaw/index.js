import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onRemoveUser, setUsers } from "../../store/actions";
import { IconBlock } from "../../pages/main/styled";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/close.svg";

export default function TableRaw(users) {
  const dispatch = useDispatch();
  const delUser = (users, id) => {
    const index = users.findIndex((el) => el.id === id);
    users.splice(index, 1);
    dispatch(setUsers(users));
  };
  return (
    <tr key={`user-${users.id}`}>
      <td>
        <Link to={`/user/${users.id}`}>{users.id}</Link>
      </td>
      <td>
        <img src={users.photo} alt="Phot" />
      </td>
      <td>
        <Link to={`/user/${users.id}`}>{users.name}</Link>
      </td>

      <td>{users.salary}</td>
      <td>{users.status}</td>
      <td>
        <Link to={`/edit_user/${users.id}`}>
          <IconBlock>
            <EditIcon />
          </IconBlock>
        </Link>
      </td>
      <td>
        <button
          onClick={() => {
            // onRemoveUser(users.id);
            delUser(users, users.id);
          }}
        >
          <IconBlock>
            <DelIcon />
          </IconBlock>
        </button>
      </td>
    </tr>
  );
}
