import styled from "styled-components";

export const Main = styled.section`
  height: 100vh;
  background: #e0a96d;
  color: #201e20;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  position: relative;
  input {
    position: relative;
    left: 177px;
  }
  table {
    border: 2px solid #201e20;
    border-collapse: collapse;
    width: 60%;

    tr {
      text-align: center;
      td,
      th {
        input {
          width: 40px;
          left: 10px;
          margin-right: 2px;
        }
        button {
          margin-left: 5px;
        }
        width: fit-content;
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
