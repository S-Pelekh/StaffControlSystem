import React from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard";

export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const itemsPerPage = useSelector((store) => store.itemsPerPage);
  const workStatus = useSelector((store) => store.workStatus);
  const vacationStatus = useSelector((store) => store.vacationStatus);
  const firedStatus = useSelector((store) => store.firedStatus);

  // const work = [...users].filter((el) =>
  //   el.status.toLowerCase().includes(workStatus)
  // );
  // const fired = [...users].filter((el) =>
  //   el.status.toLowerCase().includes(firedStatus)
  // );
  // const vacation = [...users].filter((el) =>
  //   el.status.toLowerCase().includes(vacationStatus)
  // );
  const portion = [...users]
    .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))
    .filter((el) =>
      workStatus ? el.status.toLowerCase().includes(workStatus) : true
    )
    .filter((el) =>
      vacationStatus ? el.status.toLowerCase().includes(vacationStatus) : true
    )
    .filter((el) =>
      firedStatus ? el.status.toLowerCase().includes(firedStatus) : true
    )
    .filter(
      (el) =>
        (el.salary >= salaryMin && !salaryMax) ||
        (el.salary >= salaryMin && el.salary <= salaryMax)
    )
    .slice(0, itemsPerPage);

  return (
    portion
      // .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))
      // .filter((el) =>
      //   statusSort.length > 0
      //     ? el.status
      //         .toLowerCase()
      //         .includes(statusSort[0] || statusSort[1] || statusSort[2])
      //     : true
      // )
      // .filter(
      //   (el) =>
      //     (el.salary >= salaryMin && !salaryMax) ||
      //     (el.salary >= salaryMin && el.salary <= salaryMax)
      // )
      .map((portion) => <UserCard key={`user-${portion.id}`} {...portion} />)
  );
}
