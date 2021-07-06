import {
  SET_USERS,
  SET_USER_DETAILS,
  ON_SEARCH,
  SET_TOGGLE_MENU,
  SET_SALARY_MIN,
  SET_SALARY_MAX,
  SET_TOGGLE_CLASS,
  SET_MODAL_CLASS,
  SET_DEL_ITEM_ID,
  SET_ITEMS_PER_PAGE,
  SET_WORK_STATUS,
  SET_VACATION_STATUS,
  SET_FIRED_STATUS,
  SET_USERS_SORT,
  SET_TOTAL_SALARY,
  SET_SHOW_SALARY_CLASS,
  initialState,
} from './actions'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload }
    case ON_SEARCH:
      return { ...state, keyWords: action.payload }
    case SET_TOGGLE_CLASS:
      return { ...state, toggleClass: action.payload }
    case SET_MODAL_CLASS:
      return { ...state, modalClass: action.payload }
    case SET_SHOW_SALARY_CLASS:
      return { ...state, showSalaryClass: action.payload }
    case SET_TOGGLE_MENU:
      return { ...state, toggleMenu: action.payload }
    case SET_USERS_SORT:
      return { ...state, usersSort: action.payload }
    case SET_WORK_STATUS:
      return { ...state, workStatus: action.payload }
    case SET_VACATION_STATUS:
      return { ...state, vacationStatus: action.payload }
    case SET_FIRED_STATUS:
      return { ...state, firedStatus: action.payload }
    case SET_SALARY_MIN:
      return { ...state, salaryMin: action.payload }
    case SET_SALARY_MAX:
      return { ...state, salaryMax: action.payload }
    case SET_DEL_ITEM_ID:
      return { ...state, delItemId: action.payload }
    case SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload }
    case SET_TOTAL_SALARY:
      return { ...state, totalSalary: action.payload }
    case SET_USER_DETAILS:
      const { id, details } = action.payload
      return {
        ...state,
        userDetails: { ...state.userDetails, [id]: details },
      }

    default:
      return state
  }
}
