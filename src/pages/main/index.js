import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Api from "../../helpers/api";
import { setUsers } from "../../store/actions";

export const MainPage = ({
  match: {
    params: { page },
  },
}) => {
  const users = useSelector((store) => store.users);
  const userDetails = useSelector((store) => store.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      Api.getPeople().then((data) => {
        dispatch(setUsers(data));
      });
    }
  }, [users.length]);
  console.log(userDetails, users);

  const renderUsers = () => {
    return users.map(({ id, name, photo, salary, status }) => (
      <div>
        <h2>
          {id}.{name}
        </h2>
        <img src={photo} alt="Phot" />
        <p>Salary: {salary}</p>
        <p>Status: {status}</p>
      </div>
    ));
  };

  return (
    <section>
      Main page
      <h3>Page number {page}</h3>
      <div>{renderUsers()}</div>
    </section>
  );
};
