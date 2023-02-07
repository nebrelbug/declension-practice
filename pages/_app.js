import "../styles/globals.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
// import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url
      })
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <Analytics /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
