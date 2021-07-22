import { InitState } from "./types";

export const SET_USERS = 'SET_USERS';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const ON_SEARCH = 'ON_SEARCH';
export const SET_TOGGLE_MENU = 'SET_TOGGLE_MENU';
export const SET_SALARY_MIN = 'SET_SALARY_MIN';
export const SET_SALARY_MAX = 'SET_SALARY_MAX';
export const SET_TOGGLE_CLASS = 'SET_TOGGLE_CLASS';
export const SET_MODAL_CLASS = 'SET_MODAL_CLASS';
export const SET_DEL_ITEM_ID = 'SET_DEL_ITEM_ID';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';
export const SET_WORK_STATUS = 'SET_WORK_STATUS';
export const SET_VACATION_STATUS = 'SET_VACATION_STATUS';
export const SET_FIRED_STATUS = `SET_FIRED_STATUS`;
export const SET_USERS_SORT = 'SET_USERS_SORT';
export const SET_TOTAL_SALARY = 'SET_TOTAL_SALARY';
export const SET_SHOW_SALARY_CLASS = 'SET_SHOW_SALARY_CLASS';

export const initialState: InitState = {
  users: [],
  userDetails: [],
  keyWords: '',
  toggleMenu: false,
  salaryMin: 0,
  salaryMax: 0,
  toggleClass: false,
  delItemId:0,
  modalClass: false,
  showSalaryClass: false,
  itemsPerPage: 6,
  workStatus: '',
  vacationStatus: '',
  firedStatus: '',
  usersSort: false,
  totalSalary: 0,
};
export const setUsers = (data: any) => ({ type: SET_USERS, payload: data });
export const setSalaryMin = (count: number) => ({
  type: SET_SALARY_MIN,
  payload: count,
});
export const setSalaryMax = (count: number) => ({
  type: SET_SALARY_MAX,
  payload: count,
});
export const setDelItemId = (count: number) => ({
  type: SET_DEL_ITEM_ID,
  payload: count,
});
export const setItemsPerPage = (count: number) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: count,
});
export const onSearch = (str: string) => ({
  type: ON_SEARCH,
  payload: str,
});
export const setWorkStatus = (str: string) => ({
  type: SET_WORK_STATUS,
  payload: str,
});
export const setVacationStatus = (str: string) => ({
  type: SET_VACATION_STATUS,
  payload: str,
});
export const setFiredStatus = (str: string) => ({
  type: SET_FIRED_STATUS,
  payload: str,
});
export const setToggleMenu = (val: boolean) => ({ type: SET_TOGGLE_MENU, payload: val });
export const setToggleClass = (val: boolean) => ({
  type: SET_TOGGLE_CLASS,
  payload: val,
});
export const setModalClass = (val: boolean) => ({
  type: SET_MODAL_CLASS,
  payload: val,
});
export const setShowSalaryClass = (val: boolean) => ({
  type: SET_SHOW_SALARY_CLASS,
  payload: val,
});

export const setUsersSort = (val: boolean) => ({
  type: SET_USERS_SORT,
  payload: val,
});
export const setUserDetails = (id: number, details: any) => ({
  type: SET_USER_DETAILS,
  payload: { id, details },
});
export const setTotalSalary = (count: number) => ({
  type: SET_TOTAL_SALARY,
  payload: count,
});
