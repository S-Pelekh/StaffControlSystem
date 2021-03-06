import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import { Card } from '../renderUser/styled';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DelIcon } from '../../assets/delete.svg';
import {
  setToggleClass,
  setModalClass,
  setDelItemId,
} from '../../store/actions';
import { IUser } from '../../store/types';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export default function UserCard(users: IUser) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleClass = useAppSelector(store => store.toggleClass);
  const modalClass = useAppSelector(store => store.modalClass);
  const dispatch = useAppDispatch();
  const userName: string[] = users.name.split(' ');

  return (
    <Card className={`${open ? 'showInfo' : ''}`}>
      <div className="cardButtons">
        <div>
          <Link to={`/edit_user/${users.id}`}>
            <EditIcon />
          </Link>
        </div>
        <div>
          <div
            onClick={() => {
              dispatch(setToggleClass(!toggleClass));
              dispatch(setModalClass(!modalClass));
              dispatch(setDelItemId(users.id!));
            }}>
            <DelIcon />
          </div>
        </div>
      </div>
      <div
        className="userInfo"
        onClick={() => {
          setOpen(!open);
          dispatch(setToggleClass(!toggleClass));
        }}>
        <div className="imgBlock">
          <img src={users.photo} alt="Phot" />
        </div>
        <div className="usernameBlock">
          <div>
            <p>
              {userName[0]}
              <br />
              <span>{userName[1]}</span>
            </p>
          </div>
        </div>
        <div className="positionBlock">{users.position}</div>
        <div className="salaryBlock">{users.salary}$</div>
        <div className="statusBlock">
          <div className={`${users.status}Block`}>{users.status}</div>
        </div>
        <div className="dateBlock">
          {moment(users.entryDate).format('DD MMM YYYY')}
        </div>
      </div>
    </Card>
  );
}
