import styled from "styled-components";

export const Main = styled.section`
  height: calc(100vh - 50px);
  background: #e0a96d;
  color: #201e20;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  table {
    border: 2px solid #201e20;
    border-collapse: collapse;
    width: 80%;

    tr {
      text-align: center;
      td {
        img {
          width: 50px;
          height: 50px;
        }
        a {
          text-decoration: none;
          color: #201e20;
        }
      }
    }
  }
  > input {
    position: absolute;
    left: 900px;
    top: 30px;
  }
`;

export const IconBlock = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
  > svg {
    width: 20px;
    height: 20px;
  }
`;
