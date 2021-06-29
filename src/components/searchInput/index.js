import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { onSearch } from "../../store/actions";

export const SearchInput = () => {
  const keyWords = useSelector((store) => store.keyWords);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Input name"
        value={keyWords}
        onChange={(el) => dispatch(onSearch(el.target.value))}
      />
    </div>
  );
};