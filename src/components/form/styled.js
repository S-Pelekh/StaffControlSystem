import styled from 'styled-components'

export const FormStyle = styled.div`
  height: fit-content;
  background: #2d2f44;
  border-radius: 20px;
  color: #fffbfb;
  text-align: center;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;
  @media (min-width: 1000px) {
    width: 609px;
    height: 736px;
    padding: 38px;
    form {
      width: 281px;
      > input,
      select {
        height: 37px;
        margin-top: 10px;
        margin-bottom: 29px;
      }
    }
    .backIcon {
      visibility: visible;
    }
  }
  @media (max-width: 999px) {
    width: 331px;
    height: 711px;
    padding: 24px;
    form {
      width: 277px;
      > input,
      select {
        height: 40px;
        margin-top: 9px;
        margin-bottom: 14px;
      }
    }
    .backIcon {
      visibility: hidden;
    }
    button {
      margin-top: 19px;
    }
  }
  .errors {
    color: red;
  }
  a {
    color: #fffbfb;
  }

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
    > input,
    select {
      padding: 10px;
      width: 100%;
      background: #fdf7f7;
      border-radius: 15px;
      outline: none;
    }
    select {
      appearance: none;
      background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
        no-repeat right #fdf7f7;
      background-position-x: 290px;
    }

    button {
      width: 100%;
      justify-content: center;
    }
    button:disabled {
      background: #c05e5e;
    }
  }
`
