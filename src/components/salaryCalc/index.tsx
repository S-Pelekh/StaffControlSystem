import React from 'react';
import { setTotalSalary, setShowSalaryClass } from '../../store/actions';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../store/types';

import { Button } from '../ui-kit/styled';
import { StyledCalc } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export const SalaryCalc = () => {
  const users = useAppSelector(store => store.users);
  const showSalaryClass = useAppSelector(store => store.showSalaryClass);
  const toggleMenu = useAppSelector(store=> store.toggleMenu);
  const dispatch = useAppDispatch();
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
