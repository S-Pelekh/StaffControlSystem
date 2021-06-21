import { Header as HeaderStyle } from "./styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/users">Main</Link>
      <Link to="/new_user">
        <button>Add User</button>
      </Link>
    </HeaderStyle>
  );
};
