import Api from '../helpers/api';

import { setUsers, setUserDetails } from './actions';

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
