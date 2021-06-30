import styled from "styled-components";

export const Main = styled.section`
  height: 1575px;
  width: 1400;
  background: #7e939f;
  color: #201e20;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  .usersBlock {
    width: 932px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .newUserLink {
    width: 932px;
    margin-bottom: 41px;
  }
  .showInfo {
    position: absolute;
    width: 378px;
    height: 652px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
