import Api from "../helpers/api";
import { useParams } from "react-router-dom";

export const SET_USERS = "SET_USERS";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const SET_TOTAL_USERS = "SET_TOTAL_USERS";

export const initialState = {
  users: [],
  totalUsers: 0,
  userDetails: {},
};
export const setUsers = (data) => ({ type: SET_USERS, payload: data });
export const setTotalUsers = (count) => ({
  type: SET_TOTAL_USERS,
  payload: count,
});
export const setUserDetails = (id, details) => ({
  type: SET_USER_DETAILS,
  payload: { id, details },
});
export const onGetUsers = () => (dispatch) => {
  Api.getPeople().then((data) => {
    dispatch(setUsers(data));
  });
};
export const onGetUserDetails = (id) => (dispatch) => {
  Api.getUserDetails(id).then((data) => {
    dispatch(setUserDetails(id, data));
  });
};
