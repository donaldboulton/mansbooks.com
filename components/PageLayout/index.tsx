import React from "react";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { CookieConsent } from "react-cookie-consent";
import cn from "classnames";
import { useRouter } from "next/router";
import { SkipNavContent } from "@reach/skip-nav";
import { NAVIGATION } from "@lib/constants";
import styles from "../layout.module.css";
import Image from "next/image";
import MobileMenu from "../mobile-menu";
import PageFooter from "../PageFooter";
import ScrollIndicator from "../ScrollIndicator";
import NavDropdown from "@components/NavDropdown";
import ViewSource from "../view-source";
import angieLogo from "../../public/angie/angelina-jordan-icon.jpg";

type Props = {
  children: ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false,
}: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setLoading(false);
    }
  }, [router.isReady]);
  const activeRoute = router.asPath;
  const disableCta = ["/schedule", "/speakers", "/expo", "/jobs"];
  return (
    <>
      <ScrollIndicator />
      <div className={styles.background}>
        {!hideNav && (
          <div className="bg-gradient-to-r from-[#121212] via-transparent to-[#121212]">
            <header className={cn(styles.header)}>
              <div className={styles["header-logos"]}>
                <MobileMenu key={router.asPath} />
                <Link href="/" className={styles.logo}>
                  <span className="ml-3 inline-flex">
                    <Image
                      src={angieLogo}
                      width={40}
                      height={40}
                      className="h-12 w-12 rounded-full"
                      alt="Angie Logo"
                    />
                  </span>
                </Link>
              </div>
              <div className={styles.tabs}>
                {NAVIGATION.map(({ name, route }) => (
                  <Link
                    key={name}
                    href={route}
                    className={cn(styles.tab, {
                      [styles["tab-active"]]: activeRoute.startsWith(route),
                    })}
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div className={cn(styles["header-right"])}>
                <NavDropdown />
              </div>
            </header>
          </div>
        )}
        <ViewSource />
        <div className={styles.page}>
          <div className="login-beams">
            <main className={styles.main} style={layoutStyles}>
              <SkipNavContent />
              <div className={cn(styles.full, className)}>{children}</div>
            </main>
            {!activeRoute.startsWith("/stage") && <PageFooter />}
            <CookieConsent
              enableDeclineButton
              flipButtons
              location="bottom"
              buttonText="Accept"
              declineButtonText="Decline"
              ariaAcceptLabel="Accept Cookies"
              ariaDeclineLabel="Decline Cookies"
              cookieName="gtag"
              style={{
                background:
                  "linear-gradient(to right, #4338ca, transparent, #4338ca)",
                textShadow: "2px 2px black",
              }}
              buttonStyle={{
                background:
                  "radial-gradient(circle at top right, #4338ca, transparent)",
                color: "white",
                fontWeight: "bolder",
                borderRadius: "3px",
                border: "1px black",
                textShadow: "2px 2px black",
              }}
            >
              This Site uses cookies for user experience.{" "}
              <span
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  marginLeft: "20px",
                }}
              >
                <Link
                  href="/privacy"
                  className="text-slate-300"
                  alt="Privacy Page"
                >
                  Privacy Page
                </Link>
              </span>
            </CookieConsent>
          </div>
        </div>
      </div>
    </>
  );
}
