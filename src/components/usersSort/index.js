import React from "react";
import { ReactComponent as SortIcon } from "../../assets/sortArrow.svg";

import { SortStyle } from "./styled";

export const UsersSort = () => {
  return (
    <SortStyle>
      <div>От А до Я</div>
      <SortIcon />
    </SortStyle>
  );
};
