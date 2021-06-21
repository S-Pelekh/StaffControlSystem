import { Header as HeaderStyle } from "./styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/users">Main</Link>
    </HeaderStyle>
  );
};
