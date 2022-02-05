import { AppProps } from 'next/app'
import { FC, ReactNode } from 'react'
import { SingletonRouter } from 'next/router'
import Head from 'next/head'
import { ThemeProvider, withTheme } from '@emotion/react'
import type { Theme } from 'lib/decl'

import 'styles/index.css'

interface LayoutProps {
  children: ReactNode
  router?: SingletonRouter
  pageTitle?: string
}

const theme: Partial<Theme> = {
  colors: {
    background: 'white',
    primary: 'black',
    secondary: 'darkgrey',
    accent: 'blue'
  }
}

const Layout: FC<LayoutProps> = ({
  children,
  router: _router,
  pageTitle: _pageTitle
}) => {
  return (
    <div>
      <Head>
        <title>Giacomo Pasin</title>
      </Head>
      {children}
    </div>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
