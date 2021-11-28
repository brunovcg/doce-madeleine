import { WindowSizeProvider } from "./windowSize";

const Providers = ({ children }) => {
  return <WindowSizeProvider>{children}</WindowSizeProvider>;
};

export default Providers;
