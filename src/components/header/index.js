import ReactDOM from "react-dom";
import { PageHeader } from "antd";
import "../../../node_modules/antd/dist/antd";

export const Header = () => {
  return ReactDOM.render(
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Staff control"
      subTitle=" "
    />,
    document.getElementById("root")
  );
};
