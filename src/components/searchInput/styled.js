import styled from "styled-components";

export const SearchStyled = styled.div`
  height: 50px;
  background: #2d2f44;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 22px;
  > input {
    height: 30px;
    background: #fdfafa;
    border-radius: 15px;
    padding: 10px;
    outline: none;
  }
  > svg {
    width: 25px;
    height: 25px;
    margin: 3px 6px 2px;
  }
  @media (min-width: 1441px) {
    width: 932px;
    > input {
      width: 865px;
    }
  }
  @media (min-width: 1311px) and (max-width: 1440px) {
    width: 800px;
    > input {
      width: 730px;
    }
  }
  @media (min-width: 651px) and (max-width: 1310px) {
    width: 550px;
    > input {
      width: 480px;
    }
  }
  @media (min-width: 1px) and (max-width: 650px) {
    width: 292px;
    > input {
      width: 246px;
    }
  }
`;
