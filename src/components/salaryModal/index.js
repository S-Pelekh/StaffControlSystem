import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StyledModal, Button } from '../ui-kit/styled'
import { setShowSalaryClass } from '../../store/actions'

export const SalaryModal = () => {
  const showSalaryClass = useSelector((store) => store.showSalaryClass)
  const totalSalary = useSelector((store) => store.totalSalary)
  const dispatch = useDispatch()

  return (
    <StyledModal>
      <h3>ЗАРПЛАТА СОТРУДНИКОВ ЗА СЕГОДНЯ</h3>
      <p>{totalSalary} $</p>
      <div>
        <Button
          onClick={() => {
            dispatch(setShowSalaryClass(!showSalaryClass))
          }}
        >
          Okay!
        </Button>
      </div>
    </StyledModal>
  )
}
