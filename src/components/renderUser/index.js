import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onRemoveUser, setUsers } from "../../store/actions";
import { IconBlock } from "../../pages/main/styled";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/close.svg";
import { TableRaw } from "../tableRaw";

export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const dispatch = useDispatch();
  const statusSort = useSelector((store) => store.statusSort);
  const delUser = (users, id) => {
    const index = users.findIndex((el) => el.id === id);
    users.splice(index, 1);
    dispatch(setUsers(users));
  };
  if (!keyWords && statusSort === "all") {
    return users.map(({ id, photo, name, salary, status }) => {
      if (salary >= salaryMin && !salaryMax) {
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
      } else if (salary >= salaryMin && salary <= salaryMax) {
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
      }
    });
  } else if (!keyWords && statusSort !== "all") {
    return users
      .filter((el) =>
        el.status.toLowerCase().includes(statusSort.toLowerCase())
      )
      .map(({ id, photo, name, salary, status }) => {
        if (salary >= salaryMin && !salaryMax) {
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
        } else if (salary >= salaryMin && salary <= salaryMax) {
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
        }
      });
  } else if (keyWords && statusSort !== "all") {
    return users
      .filter(
        (el) =>
          el.name.toLowerCase().includes(keyWords.toLowerCase()) &&
          el.status.toLowerCase().includes(statusSort.toLowerCase())
      )
      .map(({ id, photo, name, salary, status }) => {
        if (salary >= salaryMin && !salaryMax) {
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
        } else if (salary >= salaryMin && salary <= salaryMax) {
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
        }
      });
  } else {
    return users
      .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))
      .map(({ id, photo, name, salary, status }) => {
        if (salary >= salaryMin && !salaryMax) {
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
        } else if (salary >= salaryMin && salary <= salaryMax) {
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
        }
      });
  }
}
