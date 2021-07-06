import React from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard";
import { EmtyCard } from "../ui-kit/styled";
import useDebounce from "../useDebounce";
export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const itemsPerPage = useSelector((store) => store.itemsPerPage);
  const workStatus = useSelector((store) => store.workStatus);
  const vacationStatus = useSelector((store) => store.vacationStatus);
  const firedStatus = useSelector((store) => store.firedStatus);
  const usersSort = useSelector((store) => store.usersSort);
  const searchWords = useDebounce(keyWords, 500);
  const usersSorted = usersSort
    ? [...users].sort((a, b) => (a.name >= b.name ? 1 : -1))
    : [...users];

  const workPortion = [...usersSorted].filter((el) =>
    workStatus ? el.status.toLowerCase().includes(workStatus) : false
  );
  const vacationPortion = [...usersSorted].filter((el) =>
    vacationStatus ? el.status.toLowerCase().includes(vacationStatus) : false
  );
  const firedPortion = [...usersSorted].filter((el) =>
    firedStatus ? el.status.toLowerCase().includes(firedStatus) : false
  );
  const statusSorted = []
    .concat(workPortion)
    .concat(vacationPortion)
    .concat(firedPortion);
  const portion = statusSorted.length
    ? [...statusSorted]
        .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))

        .filter(
          (el) =>
            (el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax)
        )
        .slice(0, itemsPerPage)
    : [...usersSorted]
        .filter((el) =>
          el.name.toLowerCase().includes(searchWords.toLowerCase())
        )
        .filter(
          (el) =>
            (el.salary >= salaryMin && !salaryMax) ||
            (el.salary >= salaryMin && el.salary <= salaryMax)
        )
        .slice(0, itemsPerPage);

  return portion.map((portion) => (
    <div key={`user-${portion.id}`}>
      <EmtyCard />
      <UserCard key={`user-${portion.id}`} {...portion} />
    </div>
  ));
}
