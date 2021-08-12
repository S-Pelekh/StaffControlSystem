import { ActionTypes } from './types';

export const setUsers = (data: any) => ({ type: ActionTypes.SET_USERS, payload: data } as const);
export const setSalaryMin = (count: number) => ({
  type: ActionTypes.SET_SALARY_MIN,
  payload: count,
} as const);
export const setSalaryMax = (count: number) => ({
  type: ActionTypes.SET_SALARY_MAX,
  payload: count,
} as const);
export const setDelItemId = (count: number) => ({
  type: ActionTypes.SET_DEL_ITEM_ID,
  payload: count,
} as const);
export const setItemsPerPage = (count: number) => ({
  type: ActionTypes.SET_ITEMS_PER_PAGE,
  payload: count,
} as const);
export const onSearch = (str: string) => ({
  type: ActionTypes.ON_SEARCH,
  payload: str,
} as const);
export const setWorkStatus = (str: string) => ({
  type: ActionTypes.SET_WORK_STATUS,
  payload: str,
} as const);
export const setVacationStatus = (str: string) => ({
  type: ActionTypes.SET_VACATION_STATUS,
  payload: str,
} as const);
export const setFiredStatus = (str: string) => ({
  type: ActionTypes.SET_FIRED_STATUS,
  payload: str,
} as const );
export const setToggleMenu = (val: boolean) => ({ type: ActionTypes.SET_TOGGLE_MENU, payload: val } as const);
export const setToggleClass = (val: boolean) => ({
  type: ActionTypes.SET_TOGGLE_CLASS,
  payload: val,
} as const);
export const setModalClass = (val: boolean) => ({
  type: ActionTypes.SET_MODAL_CLASS,
  payload: val,
} as const);
export const setShowSalaryClass = (val: boolean) => ({
  type: ActionTypes.SET_SHOW_SALARY_CLASS,
  payload: val,
} as const);

export const setUsersSort = (val: boolean) => ({
  type: ActionTypes.SET_USERS_SORT,
  payload: val,
} as const);
export const setUserDetails = (id: number, details: any) => ({
  type: ActionTypes.SET_USER_DETAILS,
  payload: { id, details },
} as const);
export const setTotalSalary = (count: number) => ({
  type: ActionTypes.SET_TOTAL_SALARY,
  payload: count,
} as const);
