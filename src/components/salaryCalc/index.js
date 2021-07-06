import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTotalSalary, setShowSalaryClass } from '../../store/actions'

import { Button } from '../ui-kit/styled'
import { StyledCalc } from '../salaryCalc/styled'

export const SalaryCalc = () => {
  const users = useSelector((store) => store.users)
  const showSalaryClass = useSelector((store) => store.showSalaryClass)
  const toggleMenu = useSelector((store) => store.toggleMenu)
  const dispatch = useDispatch()
  const workPortion = [...users].filter((el) =>
    el.status.toLowerCase().includes('work')
  )
  const vacationPortion = [...users].filter((el) =>
    el.status.toLowerCase().includes('vacation')
  )
  const usersSorted = [].concat(workPortion).concat(vacationPortion)

  const salary = usersSorted.map((el) =>
    el.status === 'work' ? (el.salary / 160) * 8 : (el.salary / 160) * 4
  )
  let salarySum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }

  let totalSalary = salarySum(salary)
  return (
    <StyledCalc className={`${toggleMenu ? 'showFilter' : ''}`}>
      <Button
        onClick={() => {
          dispatch(setShowSalaryClass(!showSalaryClass))
          dispatch(setTotalSalary(totalSalary))
        }}
      >
        Today Salary
      </Button>
    </StyledCalc>
  )
}
