import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as gtag from '../lib/gtag';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // 라우팅 발생시 강제적으로 gtag.pageview 함수로 GA에게 알리기
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
