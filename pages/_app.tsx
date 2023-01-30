import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, useAppSelector } from '../redux/store'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '../styles/globals.scss'
import Layout from '../components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>)
}
