import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import UserCard from '../UserCard';
import { EmtyCard } from '../ui-kit/styled';
import useDebounce from '../../hooks/useDebounce/index';
import { InitState, IUser } from '../../store/types';


export default function RenderUsers(): ReactElement{
  const users = useSelector<InitState, IUser[]>((store) => store.users);
  const keyWords = useSelector<InitState, string>((store) => store.keyWords);
  const salaryMin = useSelector<InitState, number>((store) => store.salaryMin);
  const salaryMax = useSelector<InitState, number>((store) => store.salaryMax);
  const itemsPerPage = useSelector<InitState, number>((store) => store.itemsPerPage);
  const workStatus = useSelector<InitState, string>((store) => store.workStatus);
  const vacationStatus = useSelector<InitState, string>((store) => store.vacationStatus);
  const firedStatus = useSelector<InitState, string>((store) => store.firedStatus);
  const usersSort = useSelector<InitState, boolean>((store: InitState) => store.usersSort);
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
