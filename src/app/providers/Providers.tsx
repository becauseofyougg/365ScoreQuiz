import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { store } from "@/app/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
};
