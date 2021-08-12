import * as actions from './actions'
export enum ActionTypes {
  SET_USERS = 'SET_USERS',
  SET_USER_DETAILS = 'SET_USER_DETAILS',
  ON_SEARCH = 'ON_SEARCH',
  SET_TOGGLE_MENU = 'SET_TOGGLE_MENU',
  SET_SALARY_MIN = 'SET_SALARY_MIN',
  SET_SALARY_MAX = 'SET_SALARY_MAX',
  SET_TOGGLE_CLASS = 'SET_TOGGLE_CLASS',
  SET_MODAL_CLASS = 'SET_MODAL_CLASS',
  SET_DEL_ITEM_ID = 'SET_DEL_ITEM_ID',
  SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE',
  SET_WORK_STATUS = 'SET_WORK_STATUS',
  SET_VACATION_STATUS = 'SET_VACATION_STATUS',
  SET_FIRED_STATUS = `SET_FIRED_STATUS`,
  SET_USERS_SORT = 'SET_USERS_SORT',
  SET_TOTAL_SALARY = 'SET_TOTAL_SALARY',
  SET_SHOW_SALARY_CLASS = 'SET_SHOW_SALARY_CLASS',
  }

export interface InitState {
users: Array<IUser>;
userDetails: Array<IUser>;
keyWords: string;
toggleMenu: boolean;
  salaryMin: number;
  salaryMax: number;
  toggleClass: boolean;
  delItemId: number;
  modalClass: boolean;
  showSalaryClass: boolean;
  itemsPerPage: number;
  workStatus: string;
  vacationStatus: string;
  firedStatus: string;
  usersSort: boolean;
  totalSalary: number;
}

export interface IUser{
   id?: number
   name: string
  photo: string
  position: string
  salary: number 
  status: string
  entryDate: string
 
}

type InferValuesType<T> = T extends { [key: string]: infer U } ? U : never

export type AppAction = ReturnType<InferValuesType<typeof actions>>

