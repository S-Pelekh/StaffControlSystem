import styled from "styled-components";

export const UserDetailsStyle = styled.section`
  height: calc(100vh - 70px);
  background: #e0a96d;
  color: #201e20;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > div {
    > img {
      width: 200px;
      height: 200px;
    }
  }
`;
