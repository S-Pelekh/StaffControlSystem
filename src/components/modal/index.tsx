import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { StyledModal, Button } from '../ui-kit/styled';
import { setToggleClass, setModalClass, setUsers } from '../../store/actions';
import { onRemoveUser } from '../../store/thunks';
import { InitState, IUser } from '../../store/types';
import { useAppSelector } from '../../hooks/Store Hooks/hooks';

export const Modal: React.FC = () => {
  const allUsers = useAppSelector(store => store.users);
  const toggleClass = useSelector<InitState, boolean>((store) => store.toggleClass);
  const modalClass = useSelector<InitState, boolean>((store) => store.modalClass);
  const delItemId = useSelector<InitState, number>((store) => store.delItemId);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const delUser = (data: Array<any>, id: number) => {
    const index = data.findIndex((el) => el.id === id);
    data.splice(index, 1);
    dispatch(setUsers(data));
  };
  return (
    <StyledModal>
      <h3>{t('delModal.tittle')}</h3>
      <p>{t('delModal.paragraph')}</p>
      <div>
        <Button
          onClick={() => {
            onRemoveUser(delItemId);
            delUser(allUsers, delItemId);
            dispatch(setToggleClass(!toggleClass));
            dispatch(setModalClass(!modalClass));
          }}>
          {t('delModal.acceptButton')}
        </Button>
        <Button
          className="red"
          onClick={() => {
            dispatch(setToggleClass(!toggleClass));
            dispatch(setModalClass(!modalClass));
          }}>
          {t('delModal.cancelButton')}
        </Button>
      </div>
    </StyledModal>
  );
};
