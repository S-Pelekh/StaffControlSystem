import styled from "styled-components";

export const StyledFilter = styled.div`
  position: absolute;
  width: 185px;
  height: 162px;
  top: 280px;
  right: 68px;
  padding: 26px 21px;
  background: #2d2f44;
  border-radius: 15px;
  font-weight: bold;
  font-size: 16px;
  color: #fef8f8;
  > div div {
    margin-top: 8px;
  }
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
    padding-left: 1px;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMjAgNiA5IDE3IDQgMTIiLz48L3N2Zz4=")
      no-repeat right #73b469;

    border-radius: 5px;
  }

  input[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;
