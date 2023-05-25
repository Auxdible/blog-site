import Layout from "@/components/layout";
import { AppPropsType } from "next/dist/shared/lib/utils";
import '../styles/global.scss'
import {SessionProvider} from 'next-auth/react';
import { Session } from "next-auth";
import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";
export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsType & { pageProps: { session: Session }}) {
    return (
        <ThemeProvider>
            <SessionProvider session={session}>
                <Head>
                    <title>Auxdible&apos;s Blog</title> 
                </Head>
                <main>
                    <Layout>
                        <main><Component {...pageProps} /></main>
                    </Layout>
                </main>
            </SessionProvider>
        </ThemeProvider>
    );
}