import { Dispatch } from 'redux';
import Api from '../helpers/api';

import { setUsers, setUserDetails } from './actions';
import {  AppAction, IUser } from './types';

export const onGetUsers = () => (dispatch: Dispatch<AppAction>) => {
  Api.getPeople().then((data) => {
    dispatch(setUsers(data));
  });
};
export const onGetUserDetails = (id: number) => (dispatch: Dispatch) => {
  Api.getUserDetails(id).then((data: IUser[]) => {
    dispatch(setUserDetails(id, data));
  });
};
export const onSetNewUser = (data: IUser) => Api.setNewUser(data);

export const onEditUser = (values: IUser, id: number) => {
  Api.editUser(values, id);
};

export const onRemoveUser = (id: number) => {
  Api.removeUser(id);
};
