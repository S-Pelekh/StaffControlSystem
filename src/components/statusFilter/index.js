import React from "react";
import { useDispatch } from "react-redux";

import { onStatusSort } from "../../store/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  return (
    <select
      name="statusSelect"
      defaultValue="all"
      onChange={(el) => dispatch(onStatusSort(el.target.value))}
    >
      <option value="all">all</option>
      <option value="work">work</option>
      <option value="vacation">vacation</option>
      <option value="fired">fired</option>
    </select>
  );
};
