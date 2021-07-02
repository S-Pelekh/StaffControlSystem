import styled from "styled-components";

export const Main = styled.section`
  height: 100%;
  width: 100vw;
  background: #7e939f;
  color: #201e20;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  .shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.74);
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 9;
  }
  .shadow.show {
    visibility: visible;
    opacity: 1;
  }
  .usersBlock {
    width: 932px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .newUserLink {
    width: 932px;
    margin-bottom: 41px;
    button {
      justify-content: space-between;
    }
  }
  .showInfo {
    position: absolute;
    width: 378px;
    height: 652px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 22px 28px;
    z-index: 10;
    .cardButtons {
      width: 322px;
      svg {
        width: 45px;
        height: 45px;
      }
    }
    .userInfo {
      width: 322x;
      height: 652px;

      .usernameBlock {
        width: 322px;
        margin-bottom: 50px;
      }
      .salaryBlock,
      .positionBlock,
      .statusBlock {
        width: 322px;
        margin-bottom: 27px;
        > div {
          width: 120px;
        }
      }

      .statusBlock {
        > div {
          width: 143px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .dateBlock {
        margin-top: 63px;
      }

      img {
        width: 160px;
        height: 160px;
        margin-top: 58px;
        margin-bottom: 35px;
      }
    }
  }
  .modalWindow {
    visibility: hidden;
    position: absolute;
    width: fit-content;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .modalWindow.open {
    visibility: visible;
  }
  .showMore {
    width: 468px;
    height: 82px;
    background: #fcfafa;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-top: 60px;
  }
`;
