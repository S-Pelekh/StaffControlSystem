import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyledModal, Button } from "../ui-kit/styled";
import {
  setToggleClass,
  setModalClass,
  onRemoveUser,
  setUsers,
} from "../../store/actions";

export const Modal = () => {
  const allUsers = useSelector((store) => store.users);
  const toggleClass = useSelector((store) => store.toggleClass);
  const modalClass = useSelector((store) => store.modalClass);
  const delItemId = useSelector((store) => store.delItemId);
  const dispatch = useDispatch();
  const delUser = (data, id) => {
    const index = data.findIndex((el) => el.id === id);
    data.splice(index, 1);
    dispatch(setUsers(data));
  };
  return (
    <StyledModal>
      <h3>вы уверены что хотите удалить сотрудника?</h3>
      <p>
        После нажатия на кнопку удалить вы не сможете востановить сотрудника.
        Эта операция безвозвратна
      </p>
      <div>
        <Button
          onClick={() => {
            onRemoveUser(delItemId);
            delUser(allUsers, delItemId);
            dispatch(setToggleClass(!toggleClass));
            dispatch(setModalClass(!modalClass));
          }}
        >
          Подтвердить
        </Button>
        <Button
          className="red"
          onClick={() => {
            dispatch(setToggleClass(!toggleClass));
            dispatch(setModalClass(!modalClass));
          }}
        >
          Отменить
        </Button>
      </div>
    </StyledModal>
  );
};
