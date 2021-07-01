import styled from "styled-components";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";

export const StyledFilter = styled.div`
  width: 185px;
  height: 162px;
  padding: 26px 21px;
  background: #2d2f44;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  color: #fef8f8;
  input[type="checkbox"]:checked,
  input[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  input[type="checkbox"]:checked + label,
  input[type="checkbox"]:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
  }
  input[type="checkbox"]:checked + label:before,
  input[type="checkbox"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
    border-radius: 5px;

    background-color: #ffffff;
  }

  input[type="checkbox"]:checked + label:before,
  input[type="checkbox"]:not(:checked) + label:before {
    border-radius: 5px;
  }
  input[type="checkbox"]:checked + label:after,
  input[type="checkbox"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    transition: all 0.2s ease;
  }

  input[type="checkbox"]:checked + label:after,
  input[type="checkbox"]:not(:checked) + label:after {
    left: 0;
    width: 20px;
    height: 20px;

    background: #73b469;
    border-radius: 5px;
    /* background-image: url("https://svgsilh.com/svg/297738-ffffff.svg"); */
  }

  input[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;