import { useSelector } from "react-redux";

import TableRaw from "../tableRaw";

export default function RenderUsers() {
  const users = useSelector((store) => store.users);
  const keyWords = useSelector((store) => store.keyWords);
  const salaryMin = useSelector((store) => store.salaryMin);
  const salaryMax = useSelector((store) => store.salaryMax);
  const statusSort = useSelector((store) => store.statusSort);

  if (!keyWords && statusSort === "all") {
    return users.map((users) => {
      if (users.salary >= salaryMin && !salaryMax) {
        return TableRaw(users);
      } else if (users.salary >= salaryMin && users.salary <= salaryMax) {
        return TableRaw(users);
      }
    });
  } else if (!keyWords && statusSort !== "all") {
    return users
      .filter((el) =>
        el.status.toLowerCase().includes(statusSort.toLowerCase())
      )
      .map((users) => {
        if (users.salary >= salaryMin && !salaryMax) {
          return TableRaw(users);
        } else if (users.salary >= salaryMin && users.salary <= salaryMax) {
          return TableRaw(users);
        }
      });
  } else if (keyWords && statusSort !== "all") {
    return users
      .filter(
        (el) =>
          el.name.toLowerCase().includes(keyWords.toLowerCase()) &&
          el.status.toLowerCase().includes(statusSort.toLowerCase())
      )
      .map((users) => {
        if (users.salary >= salaryMin && !salaryMax) {
          return TableRaw(users);
        } else if (users.salary >= salaryMin && users.salary <= salaryMax) {
          return TableRaw(users);
        }
      });
  } else {
    return users
      .filter((el) => el.name.toLowerCase().includes(keyWords.toLowerCase()))
      .map((users) => {
        if (users.salary >= salaryMin && !salaryMax) {
          return TableRaw(users);
        } else if (users.salary >= salaryMin && users.salary <= salaryMax) {
          return TableRaw(users);
        }
      });
  }
}
