/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.sass";

import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Audiowide&family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;800&display=swap"
                    rel="stylesheet"
                />
                <title>Meta</title>
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
