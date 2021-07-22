import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { StyledModal, Button } from '../ui-kit/styled';
import { setShowSalaryClass } from '../../store/actions';
import { InitState } from '../../store/types';

export const SalaryModal: React.FC = () => {
  const showSalaryClass = useSelector((store: InitState) => store.showSalaryClass);
  const totalSalary = useSelector((store: InitState) => store.totalSalary);
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
