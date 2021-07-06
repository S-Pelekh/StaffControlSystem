import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersSort } from '../../store/actions';
import { ReactComponent as SortIcon } from '../../assets/sortArrow.svg';

import { SortStyle } from './styled';

export const UsersSort = () => {
  const usersSort = useSelector((store) => store.usersSort);
  const dispatch = useDispatch();
  return (
    <SortStyle onClick={() => dispatch(setUsersSort(!usersSort))}>
      <div>От А до Я</div>
      <SortIcon />
    </SortStyle>
  );
};
