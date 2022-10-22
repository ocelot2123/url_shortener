import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";

const NEXT_PUBLIC_API_URI = process.env.NEXT_PUBLIC_API_URI as string;

const client = createClient({
  url: NEXT_PUBLIC_API_URI,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
