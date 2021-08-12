import { ActionTypes, AppAction, InitState } from './types';

const initialState: InitState = {
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
export const reducer = (state:InitState = initialState, action: AppAction): InitState => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    case ActionTypes.ON_SEARCH:
      return { ...state, keyWords: action.payload };
    case ActionTypes.SET_TOGGLE_CLASS:
      return { ...state, toggleClass: action.payload };
    case ActionTypes.SET_MODAL_CLASS:
      return { ...state, modalClass: action.payload };
    case ActionTypes.SET_SHOW_SALARY_CLASS:
      return { ...state, showSalaryClass: action.payload };
    case ActionTypes.SET_TOGGLE_MENU:
      return { ...state, toggleMenu: action.payload };
    case ActionTypes.SET_USERS_SORT:
      return { ...state, usersSort: action.payload };
    case ActionTypes.SET_WORK_STATUS:
      return { ...state, workStatus: action.payload };
    case ActionTypes.SET_VACATION_STATUS:
      return { ...state, vacationStatus: action.payload };
    case ActionTypes.SET_FIRED_STATUS:
      return { ...state, firedStatus: action.payload };
    case ActionTypes.SET_SALARY_MIN:
      return { ...state, salaryMin: action.payload };
    case ActionTypes.SET_SALARY_MAX:
      return { ...state, salaryMax: action.payload };
    case ActionTypes.SET_DEL_ITEM_ID:
      return { ...state, delItemId: action.payload };
    case ActionTypes.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload };
    case ActionTypes.SET_TOTAL_SALARY:
      return { ...state, totalSalary: action.payload };
    case ActionTypes.SET_USER_DETAILS:
      const { id, details } = action.payload;
      return {
        ...state,
        userDetails: { ...state.userDetails, [id]: details },
      };

    default:
      return state;
  }
};
