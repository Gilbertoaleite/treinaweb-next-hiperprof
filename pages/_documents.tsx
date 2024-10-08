import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocuments extends Document {

    render(): JSX.Element {

        return <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                />
                    <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


            </Head>
            <body>
                <Main />
                <NextScript />

            </body>
        </Html>
    }
}