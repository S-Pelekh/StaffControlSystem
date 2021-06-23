import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  form {
    width: 60%;
    > input {
      margin: 0;
      margin-bottom: 10px;
      padding: 0;
      font-variant: tabular-nums;
      list-style: none;
      font-feature-settings: "tnum", "tnum";
      position: relative;
      display: inline-block;
      width: 100%;
      min-width: 0;
      padding: 4px 11px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      line-height: 1.5715;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: all 0.3s;
    }
    > label::before,
    #my-radio-group::before {
      display: inline-block;
      margin-right: 4px;
      color: #ff4d4f;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: "*";
    }
    button {
      line-height: 1.5715;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      border: 1px solid transparent;
      box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      border-radius: 20px;
      color: #fff;
      background: #1890ff;
      border-color: #d9d9d9;
    }
  }
`;
