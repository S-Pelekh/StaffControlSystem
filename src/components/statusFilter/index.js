import React from "react";
import { useDispatch } from "react-redux";

import { onStatusSort } from "../../store/actions";
import { StyledFilter } from "./styled";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      <div id="checkbox-group">Checked</div>
      <div role="group" aria-labelledby="checkbox-group">
        <div>
          <input id="work" type="checkbox" name="work" value="work" />
          <label for="work">Работает</label>
        </div>
        <div>
          <input
            id="vacation"
            type="checkbox"
            name="vacation"
            value="vacation"
          />
          <label for="vacation">В отпуске</label>
        </div>
        <div>
          <input id="fired" type="checkbox" name="fired" value="fired" />
          <label for="fired">Уволен</label>
        </div>
      </div>
    </StyledFilter>
    // <select
    //   name="statusSelect"
    //   defaultValue="all"
    //   onChange={(el) => dispatch(onStatusSort(el.target.value))}
    // >
    //   <option value="all">all</option>
    //   <option value="work">work</option>
    //   <option value="vacation">vacation</option>
    //   <option value="fired">fired</option>
    // </select>
  );
};
