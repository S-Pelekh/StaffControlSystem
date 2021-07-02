import Api from "../helpers/api";

export const SET_USERS = "SET_USERS";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const ON_SEARCH = "ON_SEARCH";
export const SET_STATUS_SORT = "SET_STATUS_SORT";
export const SET_SALARY_MIN = "SET_SALARY_MIN";
export const SET_SALARY_MAX = "SET_SALARY_MAX";
export const SET_TOGGLE_CLASS = "SET_TOGGLE_CLASS";
export const SET_MODAL_CLASS = "SET_MODAL_CLASS";
export const SET_DEL_ITEM_ID = "SET_DEL_ITEM_ID";
export const SET_ITEMS_PER_PAGE = "SET_ITEMS_PER_PAGE";
export const SET_WORK_STATUS = "SET_WORK_STATUS";
export const SET_VACATION_STATUS = "SET_VACATION_STATUS";
export const SET_FIRED_STATUS = `SET_FIRED_STATUS`;

export const initialState = {
  users: [],
  userDetails: {},
  keyWords: "",
  statusSort: [],
  salaryMin: "",
  salaryMax: "",
  toggleClass: false,
  delItemId: "",
  modalClass: false,
  itemsPerPage: 6,
  workStatus: "",
  vacationStatus: "",
  firedStatus: "",
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
export const setDelItemId = (count) => ({
  type: SET_DEL_ITEM_ID,
  payload: count,
});
export const setItemsPerPage = (count) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: count,
});
export const onSearch = (str) => ({
  type: ON_SEARCH,
  payload: str,
});
export const setWorkStatus = (str) => ({
  type: SET_WORK_STATUS,
  payload: str,
});
export const setVacationStatus = (str) => ({
  type: SET_VACATION_STATUS,
  payload: str,
});
export const setFiredStatus = (str) => ({
  type: SET_FIRED_STATUS,
  payload: str,
});
export const onStatusSort = (str) => ({ type: SET_STATUS_SORT, payload: str });
export const setToggleClass = (val) => ({
  type: SET_TOGGLE_CLASS,
  payload: val,
});
export const setModalClass = (val) => ({
  type: SET_MODAL_CLASS,
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
