import "@/styles/globals.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
