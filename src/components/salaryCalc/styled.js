import styled from "styled-components";

export const StyledCalc = styled.div`
  position: absolute;
  width: 181px;
  height: 102px;
  top: 650px;
  right: -130px;
  padding: 26px 21px;
  background: #2d2f44;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  color: #fef8f8;
  display: flex;
  justify-content: center;

  > button {
    width: 170px;
  }
  @media (min-width: 1070px) {
    visibility: visible;
  }
  @media (min-width: 652px) and (max-width: 1069px) {
    visibility: hidden;
    top: 447px;
    right: 90px;
    z-index: 21;
  }
  @media (max-width: 651px) {
    visibility: hidden;
    top: 447px;
    right: 110px;
    z-index: 21;
  }
`;
