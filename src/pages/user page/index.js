import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Api from "../../helpers/api";
import { setUserDetails } from "../../store/actions";
import { UserDetailsStyle } from "./styled";

export const UserDetails = () => {
  const userDetails = useSelector((store) => store.userDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (!userDetails[id]) {
      Api.getUserDetails(id).then((data) => dispatch(setUserDetails(id, data)));
    }
  }, [id]);
  console.log(userDetails, userDetails[id]);
  if (userDetails[id]) {
    const { name, photo, position, salary, status } = userDetails[id];

    return (
      <UserDetailsStyle>
        <h3>{name}</h3>
        <div>
          <img src={photo} alt="photography" />
          <p>
            <b>Position in company:</b> {position}
          </p>
          <p>
            <b>Salary:</b>
            {salary}
          </p>
          <p>
            <b>Status:</b>
            {status}
          </p>
        </div>
      </UserDetailsStyle>
    );
  } else {
    return <div>Loading...</div>;
  }
};
