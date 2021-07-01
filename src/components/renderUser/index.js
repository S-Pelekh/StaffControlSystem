import React from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard";

export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const statusSort = useSelector((store) => store.statusSort);

  return users
    .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))
    .filter((el) =>
      statusSort !== "all"
        ? el.status.toLowerCase().includes(statusSort.toLowerCase())
        : true
    )
    .filter(
      (el) =>
        (el.salary >= salaryMin && !salaryMax) ||
        (el.salary >= salaryMin && el.salary <= salaryMax)
    )
    .map((users) => <UserCard key={`user-${users.id}`} {...users} />);
}
