import styled from "styled-components";

export const Main = styled.section`
  height: 100vh;
  width: 1200;
  background: #e0a96d;
  color: #201e20;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  div > input {
    position: absolute;
    width: 120px;
    left: 70px;
    top: -40px;
  }
  table {
    border: 2px solid #201e20;
    border-collapse: collapse;
    width: 60%;
    position: relative;

    tr {
      text-align: center;
      td,
      th {
        input {
          width: 40px;
          left: 10px;
          margin-right: 2px;
          background-color: #ddc3a5;
        }
        select {
          background-color: #ddc3a5;
        }
        button {
          margin-left: 5px;
          background-color: #201e20;
          color: #e0a96d;
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
