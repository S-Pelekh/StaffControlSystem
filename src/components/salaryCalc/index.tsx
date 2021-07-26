import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalSalary, setShowSalaryClass } from '../../store/actions';
import { useTranslation } from 'react-i18next';
import { IUser, InitState } from '../../store/types';

import { Button } from '../ui-kit/styled';
import { StyledCalc } from './styled';

export const SalaryCalc = () => {
  const users = useSelector((store: InitState) => store.users);
  const showSalaryClass = useSelector((store: InitState) => store.showSalaryClass);
  const toggleMenu = useSelector((store: InitState) => store.toggleMenu);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const workPortion: IUser[] = [...users].filter((el) =>
    el.status.toLowerCase().includes('work'),
  );
  const vacationPortion: IUser[] = [...users].filter((el) =>
    el.status.toLowerCase().includes('vacation'),
  );
  const _usersSorted: IUser[] = []
  const usersSorted = _usersSorted.concat(workPortion).concat(vacationPortion);

  const salary = usersSorted.map((el) =>
    el.status === 'work' ? (el.salary / 160) * 8 : (el.salary / 160) * 4,
  );
  let salarySum = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

  let totalSalary = salarySum(salary);
  return (
    <StyledCalc className={`${toggleMenu ? 'showFilter' : ''}`}>
      <Button
        onClick={() => {
          dispatch(setShowSalaryClass(!showSalaryClass));
          dispatch(setTotalSalary(totalSalary));
        }}>
        {t('main.todaySalary')}
      </Button>
    </StyledCalc>
  );
};
