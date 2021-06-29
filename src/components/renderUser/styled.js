import styled from "styled-components";

export const Card = styled.div`
  width: 260px;
  height: 450px;
  background: #2d2f44;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 30px;
  > div:first-child {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    svg {
      width: 20px;
      height: 20px;
    }

    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }
  }
`;
