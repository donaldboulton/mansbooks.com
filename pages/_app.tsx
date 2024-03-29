import "@styles/global.css";
import "@styles/nprogress.css";
import "@styles/chrome-bug.css";
import React from "react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ResizeHandler from "@components/resize-handler";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { RecoilRoot } from "recoil";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

function App({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  const [supabase] = useState(() => createPagesBrowserClient());

  return (
    <HMSRoomProvider>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <RecoilRoot>
          <AnyComponent {...pageProps} />
        </RecoilRoot>
      </SessionContextProvider>
      <ResizeHandler />
    </HMSRoomProvider>
  );
}

export default App;
