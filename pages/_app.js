import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
