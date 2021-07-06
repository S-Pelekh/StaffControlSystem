import styled from 'styled-components'

export const Main = styled.section`
  height: 100%;
  width: fit-content;
  margin: 0 auto;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .newUserLink {
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
    .imgBlock {
      width: 160px;
      height: 160px;
      margin-top: 58px;
      margin-bottom: 35px;
    }
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
  .salaryWindow {
    visibility: hidden;
    position: absolute;
    width: fit-content;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .salaryWindow.open {
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
  .menu {
    position: relative;
    display: flex;
    justify-content: space-between;
    > svg {
      visibility: hidden;
    }
    .menu-panel {
      position: absolute;
      visibility: hidden;
      width: 260px;
      height: 400px;
      border-radius: 10px;
      background: #2d2f44;
      top: 30px;
      right: 0;
      z-index: 20;
    }
    .menu-panel.showMenu,
    .newUserLink.showMenu {
      visibility: visible;
    }
  }
  .showFilter {
    visibility: visible;
  }

  @media (min-width: 1441px) {
    .usersBlock,
    .newUserLink {
      width: 932px;
    }
  }
  @media (min-width: 1311px) and (max-width: 1440px) {
    .usersBlock,
    .newUserLink {
      width: 800px;
    }
  }
  @media (min-width: 1070px) and (max-width: 1310px) {
    .usersBlock,
    .newUserLink {
      width: 550px;
    }
  }
  @media (min-width: 651px) and (max-width: 1069px) {
    .usersBlock {
      width: 550px;
    }
    .menu {
      width: 550px;
      margin-bottom: 18px;
      > svg {
        visibility: visible;
        z-index: 21;
      }
      .newUserLink {
        width: 200px;
        visibility: hidden;
        position: absolute;
        z-index: 21;
        top: 283px;
        right: 33px;
        button {
          width: 200px;
        }
      }
    }
  }
  @media (max-width: 651px) {
    .usersBlock {
      width: 260px;
    }
    .menu {
      width: 260px;
      margin-bottom: 18px;
      > svg {
        visibility: visible;
        z-index: 21;
      }
    }
    .newUserLink {
      width: 200px;
      visibility: hidden;
      position: absolute;
      z-index: 21;
      top: 283px;
      right: 33px;
      button {
        width: 200px;
      }
    }
    .showMore {
      width: 260px;
    }
  }
`
