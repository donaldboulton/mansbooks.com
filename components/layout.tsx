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

import React from "react";
import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { SkipNavContent } from "@reach/skip-nav";
import { NAVIGATION } from "@lib/constants";
import styles from "./layout.module.css";
import Logo from "./icons/icon-hms";
import MobileMenu from "./mobile-menu";
import Footer from "./footer";
import ScrollIndicator from "./ScrollIndicator";
import RoomCta from './hms/demo-cta/room-cta';
import NavDropdown from "@components/NavDropdown";
import { hmsConfig } from "./hms/config";
import ViewSource from "./view-source";

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
  const router = useRouter();
  const activeRoute = router.asPath;
  const disableCta = ["/schedule", "/speakers", "/expo", "/jobs"];
  return (
    <>
      <ScrollIndicator />
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)} data-datocms-noindex>
            <div className={styles["header-logos"]}>
              <MobileMenu key={router.asPath} />
              <Link href="/" className={styles.logo}>
                <Logo />
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

            {(hmsConfig.hmsIntegration &&
              isLive &&
              !disableCta.includes(activeRoute)) ||
            activeRoute === "/" ? (
              <div className={cn(styles["header-right"])}>
                {activeRoute === "/" ? <NavDropdown /> : <RoomCta />}
              </div>
            ) : (
              <>
                <div />
                <NavDropdown />               
              </>
            )}
          </header>
        )}
        <ViewSource />
        <div className={styles.page}>
          <div className="blog-beams">
            <main className={styles.main} style={layoutStyles}>
              <SkipNavContent />
              <div className={cn(styles.full, className)}>{children}</div>
            </main>
            {!activeRoute.startsWith("/stage") && <Footer />}
          </div>
        </div>
      </div>
    </>
  );
}
