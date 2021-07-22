import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersSort } from '../../store/actions';
import { ReactComponent as SortIcon } from '../../assets/sortArrow.svg';
import { useTranslation } from 'react-i18next';

import { SortStyle } from './styled';
import { InitState } from '../../store/types';

export const UsersSort: React.FC = () => {
  const usersSort = useSelector((store: InitState) => store.usersSort);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <SortStyle onClick={() => dispatch(setUsersSort(!usersSort))}>
      <div>{t('main.sort')}</div>
      <SortIcon />
    </SortStyle>
  );
};
