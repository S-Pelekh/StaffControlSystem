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
  padding: 15px 19px;
  margin-bottom: 30px;
  position: relative;
  .cardButtons {
    width: 230px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    position: absolute;
  }
  .userInfo {
    width: 230px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: #f3eaea;
    .usernameBlock,
    .salaryBlock,
    .positionBlock,
    .statusBlock {
      width: 230px;
      margin-bottom: 19px;
      > div {
        width: 120px;
        p {
          font-weight: bold;
          font-size: 18px;
          color: #f3eaea;
          span {
            font-size: 24px;
          }
        }
      }
    }
    .salaryBlock {
      font-size: 24px;
    }
    .statusBlock {
      > div {
        width: fit-content;

        border-radius: 10px;
        padding: 5px 19px;
        font-size: 12px;
      }
      .workBlock {
        background: #73b469;
      }
      .vacationBlock {
        background: #e4a648;
      }
      .firedBlock {
        background: #c05e5e;
      }
    }
    .dateBlock {
      margin-top: 44px;
      font-weight: bold;
      font-size: 16px;
    }
    svg {
      width: 31px;
      height: 31px;
    }
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      margin-top: 19px;
      margin-bottom: 24px;
    }
  }
`;
