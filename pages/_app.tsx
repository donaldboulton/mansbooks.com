/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SSRProvider, OverlayProvider } from 'react-aria';
import '@styles/global.css';
import '@styles/nprogress.css';
import '@styles/chrome-bug.css';
import type { AppProps } from 'next/app';
import NProgress from '@components/nprogress';
import ResizeHandler from '@components/resize-handler';
import { useEffect } from 'react';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { SessionProvider, useSession } from "next-auth/react"

export default function App({ Component }: AppProps) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <SSRProvider>
      <OverlayProvider>
        <HMSRoomProvider>
          <SessionProvider session={session} refetchInterval={5 * 60}>
            <Component {...pageProps} />
          </SessionProvider>
          <ResizeHandler />
          <NProgress />
        </HMSRoomProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}
