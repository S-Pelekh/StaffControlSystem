import React from 'react';
import { setUsersSort } from '../../store/actions';
import { ReactComponent as SortIcon } from '../../assets/sortArrow.svg';
import { useTranslation } from 'react-i18next';

import { SortStyle } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export const UsersSort: React.FC = () => {
  const usersSort = useAppSelector(store => store.usersSort);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <SortStyle onClick={() => dispatch(setUsersSort(!usersSort))}>
      <div>{t('main.sort')}</div>
      <SortIcon />
    </SortStyle>
  );
};
