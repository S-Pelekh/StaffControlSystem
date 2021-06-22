import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import { onGetUserDetails } from "../../store/actions";
import { UserDetailsStyle } from "./styled";

export const UserDetails = () => {
  const userDetails = useSelector((store) => store.userDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getUserDetails = () => onGetUserDetails(id);
  const fetch = bindActionCreators(getUserDetails, dispatch);
  useEffect(() => {
    if (!userDetails[id]) {
      fetch();
    }
  }, [id]);
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
