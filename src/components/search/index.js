import React from "react";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { onSearch } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const SearchInput = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const getSearch = (value) => dispatch(onSearch(value));
  const keyWords = useSelector((store) => store.keyWords);
  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        value={keyWords}
        onSearch={getSearch}
        style={{ width: 200 }}
      />
    </Space>
  );
};
