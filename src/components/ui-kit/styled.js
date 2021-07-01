import styled from "styled-components";

export const Button = styled.button`
  width: 278px;
  height: 44px;
  background: #73b469;
  border-radius: 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 27px 12px 19px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fffafa;
`;

export const Input = styled.input`
  width: 281px;
  height: 37px;
  background: #fdf7f7;
  border-radius: 15px;
`;

export const EmtyCard = styled.div`
  width: 260px;
`;

export const StyledModal = styled.div`
  width: 903px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #442d3b;
  border-radius: 25px;
  padding: 54px 92px;

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fffafa;
  }
  p {
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    color: #fcf6f6;
  }
  div {
    width: 600px;
    display: flex;
    justify-content: space-between;
    .red {
      background: #c05e5e;
    }
    button:hover {
      background: #679f5e;
    }
    .red:hover {
      background: #ac5555;
    }
  }
`;
