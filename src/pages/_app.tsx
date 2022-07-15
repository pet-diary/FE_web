// import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SEO } from '~/common/seo'

import '~/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  // const [isProduction, setIsProduction] = useState<boolean>(false)
  // useEffect(() => {
  //   // const { hostname } = window.location
  //   setIsProduction(
  //     process.env.NODE_ENV === 'production' // && hostname === ''
  //   )
  // }, [])
  return (
    <>
      <Head>
        <title>{SEO.site_name}</title>
        <meta charSet='UTF-8' />
        <meta name='locale' content='ko' />
        <meta name='google' content='notranslate' />
        <meta name='robots' content='follow, index' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <meta
          name='viewport'
          content='width=1460, maximum-scale=1.0, user-scalable=yes, shrink-to-fit=no'
        />
        <link rel='manifest' href={SEO.manifest} />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='application-name' content={SEO.title} />
        <meta name='apple-mobile-web-app-title' content={SEO.title} />
        <meta name='msapplication-navbutton-color' content='#ffffff' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='msapplication-config' content={SEO.browser_config} />
        <meta name='theme-color' content={SEO.color} />
        <meta name='msapplication-starturl' content={SEO.start_url} />
        {/* <link
            rel='apple-touch-icon'
            sizes='57x57'
            href={SEO.apple_icon.size_57}
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href={SEO.apple_icon.size_60}
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href={SEO.apple_icon.size_72}
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href={SEO.apple_icon.size_76}
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href={SEO.apple_icon.size_114}
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href={SEO.apple_icon.size_120}
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href={SEO.apple_icon.size_144}
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href={SEO.apple_icon.size_152}
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={SEO.apple_icon.size_180}
          /> */}
        <link rel='icon' href={SEO.favicon} />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={SEO.icon.size_16}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={SEO.icon.size_32}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href={SEO.icon.size_96}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href={SEO.icon.size_192}
        />
        <link
          rel='mask-icon'
          href={SEO.mask_icon}
          color={SEO.mask_icon_color}
        />
        <link rel='canonical' href={SEO.canonical} />
        <meta property='og:site_name' content={SEO.title} />
        <meta property='og:locale' content={SEO.locale} />
        <meta property='og:url' content={SEO.url} />
        <meta property='og:title' content={SEO.title} />
        <meta property='og:description' content={SEO.description} />
        <meta property='og:type' content={SEO.type} />
        <meta property='og:image' content={SEO.image} />
        <meta name='title' content={SEO.title} />
        <meta name='keywords' content={SEO.keywords} />
        <meta name='description' content={SEO.description} />
        <meta name='author' content={SEO.author} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={SEO.title} />
        <meta name='twitter:url' content={SEO.url} />
        <meta name='twitter:description' content={SEO.description} />
        <meta property='twitter:image' content={SEO.image} />
      </Head>
      {/* {isProduction && (
        <>
        </>
      )} */}

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default App
