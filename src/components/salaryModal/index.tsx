import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledModal, Button } from '../ui-kit/styled';
import { setShowSalaryClass } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export const SalaryModal: React.FC = () => {
  const showSalaryClass = useAppSelector(store => store.showSalaryClass);
  const totalSalary = useAppSelector(store => store.totalSalary);
  const dispatch = useAppDispatch();
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
