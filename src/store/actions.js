import Api from "../helpers/api";

export const SET_USERS = "SET_USERS";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const ON_SEARCH = "ON_SEARCH";
export const SET_STATUS_SORT = "SET_STATUS_SORT";
export const SET_SALARY_MIN = "SET_SALARY_MIN";
export const SET_SALARY_MAX = "SET_SALARY_MAX";
export const SET_TOGGLE_CLASS = "SET_TOGGLE_CLASS";

export const initialState = {
  users: [],
  userDetails: {},
  keyWords: "",
  statusSort: "all",
  salaryMin: "",
  salaryMax: "",
  toggleClass: false,
};
export const setUsers = (data) => ({ type: SET_USERS, payload: data });
export const setSalaryMin = (count) => ({
  type: SET_SALARY_MIN,
  payload: count,
});
export const setSalaryMax = (count) => ({
  type: SET_SALARY_MAX,
  payload: count,
});
export const onSearch = (str) => ({
  type: ON_SEARCH,
  payload: str,
});
export const onStatusSort = (str) => ({ type: SET_STATUS_SORT, payload: str });
export const setToggleClass = (val) => ({
  type: SET_TOGGLE_CLASS,
  payload: val,
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
export const onSetNewUser = (values) => Api.setNewUser(values);

export const onEditUser = (values, id) => {
  Api.editUser(values, id);
};

export const onRemoveUser = (id) => {
  Api.removeUser(id);
};
