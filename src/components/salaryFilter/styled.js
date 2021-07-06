import styled from 'styled-components'

export const SalaryStyled = styled.div`
  position: absolute;
  width: 181px;
  height: 117px;
  top: 460px;
  right: -130px;
  background: #2d2f44;
  border-radius: 15px;
  padding: 27px 17px;
  h3 {
    font-size: 16px;
    margin-bottom: 17px;

    color: #fbf1f1;
  }
  input {
    width: 45px;
    height: 27px;
    padding: 3px;
    background: #fffafa;
    border-radius: 10px;
    margin-right: 10px;
    outline: none;
  }
  button {
    width: 27px;
    height: 27px;
    background: #fffafa;
    border-radius: 10px;
    border: none;
  }
  @media (min-width: 1070px) {
    visibility: visible;
  }
  @media (min-width: 652px) and (max-width: 1069px) {
    visibility: hidden;
    top: 282px;
    right: 110px;
    z-index: 21;
  }
  @media (max-width: 651px) {
    visibility: hidden;
    top: 282px;
    right: 125px;
    z-index: 21;
  }
`
