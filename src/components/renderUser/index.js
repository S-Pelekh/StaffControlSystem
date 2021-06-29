import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onRemoveUser, setUsers } from "../../store/actions";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/delete.svg";
import UserCard from "../UserCard";
import { Card } from "./styled";

export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const statusSort = useSelector((store) => store.statusSort);
  const dispatch = useDispatch();
  const delUser = (users, id) => {
    const index = users.findIndex((el) => el.id === id);
    users.splice(index, 1);
    dispatch(setUsers(users));
  };

  if (!keyWords && statusSort === "all") {
    return users
      .filter(
        (el) =>
          (el.salary >= salaryMin && !salaryMax) ||
          (el.salary >= salaryMin && el.salary <= salaryMax)
      )
      .map((users) => (
        <Card key={`user-${users.id}`}>
          <div>
            <div>
              <Link to={`/edit_user/${users.id}`}>
                <EditIcon />
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  onRemoveUser(users.id);
                  delUser(users, users.id);
                }}
              >
                <DelIcon />
              </button>
            </div>
          </div>

          {UserCard(users)}
        </Card>
      ));
  } else if (!keyWords && statusSort !== "all") {
    return users
      .filter(
        (el) =>
          el.status.toLowerCase().includes(statusSort.toLowerCase()) &&
          ((el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax))
      )
      .map((users) => (
        <Card key={`user-${users.id}`}>
          <div>
            <div>
              <Link to={`/edit_user/${users.id}`}>
                <EditIcon />
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  onRemoveUser(users.id);
                  delUser(users, users.id);
                }}
              >
                <DelIcon />
              </button>
            </div>
          </div>
          {UserCard(users)}
        </Card>
      ));
  } else if (keyWords && statusSort !== "all") {
    return users
      .filter(
        (el) =>
          el.name.toLowerCase().includes(keyWords.toLowerCase()) &&
          el.status.toLowerCase().includes(statusSort.toLowerCase()) &&
          ((el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax))
      )
      .map((users) => (
        <Card key={`user-${users.id}`}>
          <div>
            <div>
              <Link to={`/edit_user/${users.id}`}>
                <EditIcon />
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  onRemoveUser(users.id);
                  delUser(users, users.id);
                }}
              >
                <DelIcon />
              </button>
            </div>
          </div>
          {UserCard(users)}
        </Card>
      ));
  } else {
    return users
      .filter(
        (el) =>
          el.name.toLowerCase().includes(keyWords.toLowerCase()) &&
          ((el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax))
      )
      .map((users) => (
        <Card key={`user-${users.id}`}>
          <div>
            <Link to={`/edit_user/${users.id}`}>
              <EditIcon />
            </Link>
            <button
              onClick={() => {
                onRemoveUser(users.id);
                delUser(users, users.id);
              }}
            >
              <DelIcon />
            </button>
          </div>
          {UserCard(users)}
        </Card>
      ));
  }
}
