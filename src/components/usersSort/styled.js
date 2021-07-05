import styled from "styled-components";

export const SortStyle = styled.div`
  width: 181px;
  height: 43px;

  background: #2d2f44;
  border-radius: 10px;
  font-size: 18px;
  color: #fff5f5;
  padding: 11px 17px;
  display: flex;
  justify-content: space-between;
  svg {
    margin-top: 5px;
  }
  @media (min-width: 1070px) {
    position: absolute;
    top: 85px;
    right: -178px;
  }
  @media (max-width: 1069px) {
    position: relative;
  }
`;
