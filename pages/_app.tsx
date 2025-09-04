import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyles";
import ThemeProvider from "@src/theme/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}