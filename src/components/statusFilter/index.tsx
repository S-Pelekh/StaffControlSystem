import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  setWorkStatus,
  setVacationStatus,
  setFiredStatus,
} from '../../store/actions';
import { StyledFilter } from './styled';
import { InitState } from '../../store/types';

export const StatusFilter:React.FC = () => {
  const dispatch = useDispatch();
  const workStatus = useSelector<InitState, string>((store) => store.workStatus);
  const vacationStatus = useSelector<InitState, string>((store) => store.vacationStatus);
  const firedStatus = useSelector<InitState, string>((store) => store.firedStatus);
  const toggleMenu = useSelector<InitState, boolean>((store) => store.toggleMenu);
  const { t } = useTranslation();

  return (
    <StyledFilter className={`${toggleMenu ? 'showFilter' : ''}`}>
      <div id="checkbox-group">{t('main.status')}</div>
      <div role="group" aria-labelledby="checkbox-group">
        <div>
          <input
            id="work"
            type="checkbox"
            name="work"
            value="work"
            onChange={() => {
              !workStatus
                ? dispatch(setWorkStatus('work'))
                : dispatch(setWorkStatus(''));
            }}
          />
          <label htmlFor="work">{t('main.statusFilter.work')}</label>
        </div>
        <div>
          <input
            id="vacation"
            type="checkbox"
            name="vacation"
            value="vacation"
            onChange={() => {
              !vacationStatus
                ? dispatch(setVacationStatus('vacation'))
                : dispatch(setVacationStatus(''));
            }}
          />
          <label htmlFor="vacation">{t('main.statusFilter.vacation')}</label>
        </div>
        <div>
          <input
            id="fired"
            type="checkbox"
            name="fired"
            value="fired"
            onChange={() => {
              !firedStatus
                ? dispatch(setFiredStatus('fired'))
                : dispatch(setFiredStatus(''));
            }}
          />
          <label htmlFor="fired">{t('main.statusFilter.fired')}</label>
        </div>
      </div>
    </StyledFilter>
  );
};
