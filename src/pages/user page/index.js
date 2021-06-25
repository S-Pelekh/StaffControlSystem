import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import moment from "moment";

import { onGetUserDetails } from "../../store/actions";
import { UserDetailsStyle } from "./styled";
import { Loader } from "../../components/loader/index";

export const UserDetails = () => {
  const userDetails = useSelector((store) => store.userDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetch = bindActionCreators(() => onGetUserDetails(id), dispatch);
  useEffect(() => {
    if (!userDetails[id]) {
      fetch();
    }
  }, [userDetails]);
  if (userDetails[id]) {
    const { name, photo, position, salary, status, entryDate } =
      userDetails[id];

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
          <p>
            <b>Entry Data:</b>
            {moment(entryDate).format("DD.MM.YYYY")}
          </p>
        </div>
      </UserDetailsStyle>
    );
  } else {
    return <Loader />;
  }
};
