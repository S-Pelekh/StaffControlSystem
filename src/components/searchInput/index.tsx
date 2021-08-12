import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { SearchStyled } from './styled';
import { useTranslation } from 'react-i18next';

import { onSearch } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/Store Hooks/hooks';

export default function SearchInput() {
  const keyWords = useAppSelector((store) => store.keyWords);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder={t('main.input')}
        value={keyWords}
        onChange={(el) => {
          dispatch(onSearch(el.target.value));
        }}
      />
      <SearchIcon />
    </SearchStyled>
  );
}
