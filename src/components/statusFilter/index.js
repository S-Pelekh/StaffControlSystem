import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  onStatusSort,
  setWorkStatus,
  setVacationStatus,
  setFiredStatus,
} from "../../store/actions";
import { StyledFilter } from "./styled";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const statusSort = useSelector((store) => store.statusSort);

  return (
    <StyledFilter>
      <div id="checkbox-group">СТАТУС</div>
      <div role="group" aria-labelledby="checkbox-group">
        <div>
          <input
            id="work"
            type="checkbox"
            name="work"
            value="work"
            onChange={(el) => {
              el.target.value
                ? dispatch(setWorkStatus("work"))
                : dispatch(setWorkStatus(""));
              // if (el.target.checked) {
              //   statusSort.splice(0, 0, el.target.value);
              //   dispatch(onStatusSort(statusSort));
              // } else {
              //   const index = statusSort.findIndex((el) => el === "work");
              //   statusSort.splice(index, 1);
              //   dispatch(onStatusSort(statusSort));
              // }
            }}
          />
          <label htmlFor="work">Работает</label>
        </div>
        <div>
          <input
            id="vacation"
            type="checkbox"
            name="vacation"
            value="vacation"
            onChange={(el) => {
              el.target.value
                ? dispatch(setVacationStatus("vacation"))
                : dispatch(setVacationStatus(""));
              // if (el.target.checked) {
              //   statusSort.splice(1, 0, el.target.value);
              //   dispatch(onStatusSort(statusSort));
              // } else {
              //   const index = statusSort.findIndex((el) => el === "vacation");
              //   statusSort.splice(index, 1);
              //   dispatch(onStatusSort(statusSort));
              // }
            }}
          />
          <label htmlFor="vacation">В отпуске</label>
        </div>
        <div>
          <input
            id="fired"
            type="checkbox"
            name="fired"
            value="fired"
            onChange={(el) => {
              el.target.value
                ? dispatch(setFiredStatus("fired"))
                : dispatch(setFiredStatus(""));
              // if (el.target.checked) {
              //   statusSort.splice(2, 0, el.target.value);
              //   dispatch(onStatusSort(statusSort));
              // } else {
              //   const index = statusSort.findIndex((el) => el === "fired");
              //   statusSort.splice(index, 1);
              //   dispatch(onStatusSort(statusSort));
              // }
            }}
          />
          <label htmlFor="fired">Уволен</label>
        </div>
      </div>
    </StyledFilter>
  );
};
