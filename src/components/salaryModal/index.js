import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { StyledModal, Button } from '../ui-kit/styled';
import { setShowSalaryClass } from '../../store/actions';

export const SalaryModal = () => {
  const showSalaryClass = useSelector((store) => store.showSalaryClass);
  const totalSalary = useSelector((store) => store.totalSalary);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <StyledModal>
      <h3>{t('salaryModal')}</h3>
      <p>{totalSalary} $</p>
      <div>
        <Button
          onClick={() => {
            dispatch(setShowSalaryClass(!showSalaryClass));
          }}>
          Okay!
        </Button>
      </div>
    </StyledModal>
  );
};
