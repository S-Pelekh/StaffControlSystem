import Api from "../helpers/api";

export const SET_USERS = "SET_USERS";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const ON_SEARCH = "ON_SEARCH";
export const SET_TOGGLE_MENU = "SET_TOGGLE_MENU";
export const SET_SALARY_MIN = "SET_SALARY_MIN";
export const SET_SALARY_MAX = "SET_SALARY_MAX";
export const SET_TOGGLE_CLASS = "SET_TOGGLE_CLASS";
export const SET_MODAL_CLASS = "SET_MODAL_CLASS";
export const SET_DEL_ITEM_ID = "SET_DEL_ITEM_ID";
export const SET_ITEMS_PER_PAGE = "SET_ITEMS_PER_PAGE";
export const SET_WORK_STATUS = "SET_WORK_STATUS";
export const SET_VACATION_STATUS = "SET_VACATION_STATUS";
export const SET_FIRED_STATUS = `SET_FIRED_STATUS`;
export const SET_USERS_SORT = "SET_USERS_SORT";
export const SET_TOTAL_SALARY = "SET_TOTAL_SALARY";
export const SET_SHOW_SALARY_CLASS = "SET_SHOW_SALARY_CLASS";

export const initialState = {
  users: [],
  userDetails: {},
  keyWords: "",
  toggleMenu: false,
  salaryMin: "",
  salaryMax: "",
  toggleClass: false,
  delItemId: "",
  modalClass: false,
  showSalaryClass: false,
  itemsPerPage: 6,
  workStatus: "",
  vacationStatus: "",
  firedStatus: "",
  usersSort: false,
  totalSalary: 0,
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
export const setToggleMenu = (val) => ({ type: SET_TOGGLE_MENU, payload: val });
export const setToggleClass = (val) => ({
  type: SET_TOGGLE_CLASS,
  payload: val,
});
export const setModalClass = (val) => ({
  type: SET_MODAL_CLASS,
  payload: val,
});
export const setShowSalaryClass = (val) => ({
  type: SET_SHOW_SALARY_CLASS,
  payload: val,
});

export const setUsersSort = (val) => ({
  type: SET_USERS_SORT,
  payload: val,
});
export const setUserDetails = (id, details) => ({
  type: SET_USER_DETAILS,
  payload: { id, details },
});
export const setTotalSalary = (count) => ({
  type: SET_TOTAL_SALARY,
  payload: count,
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
