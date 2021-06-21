import styled from "styled-components";

export const Main = styled.section`
  height: calc(100vh - 100px);
  background: #e0a96d;
  color: #201e20;
  padding: 20px;

  table {
    border: 1px solid #201e20;
    tr {
      td {
        img {
          width: 50px;
          height: 50px;
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
