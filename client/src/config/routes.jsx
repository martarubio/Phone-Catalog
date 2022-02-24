import * as PATHS from "../utils/paths";
import HomePage from "../components/pages/Home";

const routes = (props) => {
  return [
    {
      path: PATHS.HOME,
      element: <Home {...props} />,
    },
  ];
};

export default routes;
