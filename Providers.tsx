import { Provider } from "react-redux";
import store from "store/store";

const Providers: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
