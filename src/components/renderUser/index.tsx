import React, { ReactElement } from 'react';

import UserCard from '../UserCard';
import { EmtyCard } from '../ui-kit/styled';
import useDebounce from '../../hooks/useDebounce/index';
import { IUser } from '../../store/types';
import { useAppSelector } from '../../hooks/Store Hooks/hooks';


export default function RenderUsers(): ReactElement{
  const users = useAppSelector(store => store.users);
  const keyWords = useAppSelector(store => store.keyWords);
  const salaryMin = useAppSelector(store => store.salaryMin);
  const salaryMax = useAppSelector(store => store.salaryMax);
  const itemsPerPage = useAppSelector(store => store.itemsPerPage);
  const workStatus = useAppSelector(store => store.workStatus);
  const vacationStatus = useAppSelector(store=> store.vacationStatus);
  const firedStatus = useAppSelector(store => store.firedStatus);
  const usersSort = useAppSelector(store => store.usersSort);
  const searchWords = useDebounce(keyWords, 500);
  const usersSorted = usersSort
    ? [...users].sort((a, b) => (a.name >= b.name ? 1 : -1))
    : [...users];

  const workPortion = [...usersSorted].filter((el) =>
    workStatus ? el.status.toLowerCase().includes(workStatus) : false,
  );
  const vacationPortion = [...usersSorted].filter((el) =>
    vacationStatus ? el.status.toLowerCase().includes(vacationStatus) : false,
  );
  const firedPortion = [...usersSorted].filter((el) =>
    firedStatus ? el.status.toLowerCase().includes(firedStatus) : false,
  );

  const _statusSorted: IUser[]=[] 
  const statusSorted = _statusSorted.concat(workPortion)
    .concat(vacationPortion)
    .concat(firedPortion);
  const portion: any[] = statusSorted.length
    ? [...statusSorted]
        .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))

        .filter(
          (el) =>
            (el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax),
        )
        .slice(0, itemsPerPage)
    : [...usersSorted]
        .filter((el) =>
          el.name.toLowerCase().includes(searchWords.toLowerCase()),
        )
        .filter(
          (el) =>
            (el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax),
        )
        .slice(0, itemsPerPage);

  return  ( <React.Fragment>{portion.map((portion) => (
    <div key={`user-${portion.id}`}>
      <EmtyCard />
      <UserCard key={`user-${portion.id}`} {...portion} />
    </div>  ))}</React.Fragment>)
  
}
