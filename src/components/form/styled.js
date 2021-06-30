import styled from "styled-components";

export const FormStyle = styled.div`
  width: 609px;
  height: 736px;
  background: #2d2f44;
  border-radius: 20px;
  color: #fffbfb;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 38px;
  position: relative;
  .backIcon {
    width: 78px;
    height: 78px;
    background: #2d2f44;
    border-radius: 15px;
    padding: 19px 28px;
    position: absolute;
    left: -134px;
    top: 0px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 29px;
  }
  form {
    width: 60%;
    > input,
    select {
      margin-top: 10px;
      margin-bottom: 29px;
      padding: 10px;
      width: 100%;
      height: 37px;
      background: #fdf7f7;
      border-radius: 15px;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;
