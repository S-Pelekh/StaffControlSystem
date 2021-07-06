import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { SearchStyled } from './styled';

import { onSearch } from '../../store/actions';

export default function SearchInput() {
  const keyWords = useSelector((store) => store.keyWords);
  const dispatch = useDispatch();

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Введите имя сотрудника"
        value={keyWords}
        onChange={(el) => {
          dispatch(onSearch(el.target.value));
        }}
      />
      <SearchIcon />
    </SearchStyled>
  );
}
