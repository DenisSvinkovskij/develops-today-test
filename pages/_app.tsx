import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import {Provider} from 'react-redux'
import {wrapper} from '../redux'

import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
{/* <Provider store={store}></Provider> */}
export default wrapper.withRedux(MyApp)