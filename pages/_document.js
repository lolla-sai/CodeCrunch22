import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <body className="bg-black text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
