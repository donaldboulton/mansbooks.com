import React from "react";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Center from "@components/Center";
import cn from "classnames";
import { Sponsor } from "@lib/types";
import Giscus from "@giscus/react";
import ViewCounter from "@components/ViewCounter";
import LovesCounter from "@components/LovesCounter";
import { EyeIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import styles from "@components/sponsor-section.module.css";
import styleUtils from "@components/utils.module.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSession } from "@supabase/auth-helpers-react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

type SponsorSectionProps = {
  sponsor: Sponsor;
};

export default function SponsorSection({ sponsor }: SponsorSectionProps) {
  const session = useSession();
  const supabase = createClientComponentClient<Database>();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <>
        <Script
          src="https://apis.google.com/js/platform.js"
          strategy="worker"
        />
      </>
      <div className="mb-20">
        <Link href="/expo" className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Videos
        </Link>
        <div className={styles.layout}>
          <iframe
            className={cn(
              styles.video,
              styleUtils.appear,
              styleUtils["appear-first"],
            )}
            allow="picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="100%"
            src={`https://youtube.com/embed/${sponsor.youtubeSlug}`}
            title={sponsor.name}
            width="100%"
          />
          <div className={styles.container}>
            <div className={styles["name-and-logo"]}>
              <Image
                alt={sponsor.name}
                src={sponsor.logo.url}
                className={styles.image}
                loading="lazy"
                title={sponsor.name}
                height={64}
                width={64}
              />
              <h1 className={styles.name}>{sponsor.name}</h1>
            </div>
            <div className="mt-4 flex">
              <div className="flex flex-row text-xs text-slate-300">
                <span className={cn(styles.button, styles["button-resource"])}>
                  <EyeIcon className="-mt-1 h-8 w-8 pr-2" />{" "}
                  <ViewCounter slug={sponsor.slug} />
                </span>
              </div>
              <div className="flex flex-row text-xs text-slate-300">
                <span className={cn(styles.button, styles["button-resource"])}>
                  <LovesCounter
                    slug={sponsor.slug}
                    session={session}
                    type="button"
                    aria-describedby="AJ Loves Action"
                  />
                </span>
              </div>
              <div className="flex flex-row text-xs text-slate-300">
                {showModal ? (
                  <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                      <div className="relative mx-auto my-6 w-auto max-w-3xl">
                        {/*content*/}
                        <div className="relative flex w-full flex-col rounded-lg border-0 bg-[#111111] shadow-lg outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-700 p-5">
                            <Center>Social Share</Center>
                            <button
                              className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-slate-200 outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="block h-6 w-6 bg-transparent text-2xl text-slate-200 opacity-5 outline-none focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-slate-200"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative flex-auto p-6">
                            <div className="my-4 bg-[#111111] px-2 text-lg leading-relaxed text-slate-300">
                              <EmailShareButton
                                url="https://mansbooks.com/expo/sponsor.slug/"
                                subject={sponsor.name}
                                body="body"
                              >
                                <EmailIcon size={32} round />
                              </EmailShareButton>{" "}
                              <TwitterShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                                title={sponsor.name}
                              >
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>{" "}
                              <FacebookShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              >
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>{" "}
                              <PinterestShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              >
                                <PinterestIcon size={32} round />
                              </PinterestShareButton>{" "}
                              <TelegramShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                                title={sponsor.name}
                              >
                                <TelegramIcon size={32} round />
                              </TelegramShareButton>{" "}
                              <RedditShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              >
                                <RedditIcon size={32} round />
                              </RedditShareButton>{" "}
                              <WhatsappShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              >
                                <WhatsappIcon size={32} round />
                              </WhatsappShareButton>{" "}
                              <LinkedinShareButton
                                url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              >
                                <LinkedinIcon size={32} round />
                              </LinkedinShareButton>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-700 p-6">
                            <span
                              className={cn(
                                styles.button,
                                styles["button-resource"],
                              )}
                            >
                              <button
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                  </>
                ) : null}
                <span className={cn(styles.button, styles["button-resource"])}>
                  <button onClick={() => setShowModal(true)}>
                    <ShareIcon className="-mt-1 h-8 w-8 pr-2" />
                  </button>
                </span>
              </div>
            </div>
            <div className={styles.description}>{sponsor.description}</div>
            <div className={styles["sponsor-details"]}>
              <Link
                href={sponsor.callToActionLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="AJ Action"
                area-label="AJ Action"
                type="button"
                className={cn(styles.button, styles["button-resource"])}
              >
                {sponsor.callToAction}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </Link>
              <Link
                href={sponsor.discord}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className={cn(styles.button, styles["button-link"])}
              >
                Chat on Discord
              </Link>
            </div>
            <div className={styles.resources}>
              <h2 className={styles.heading}>Resources</h2>
              {sponsor.links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(styles.button, styles["button-resource"])}
                >
                  <span className={styles.truncate}>{link.text}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </Link>
              ))}
              <div className={cn(styles.button, styles["button-resource"])}>
                <div
                  className="g-ytsubscribe"
                  data-channelid="UC1Pwa4nFvIPbtYVLcBGDpjA"
                  data-layout="full"
                  data-theme="dark"
                  data-count="default"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 mt-6 w-[95vw]">
        <div className="comments-container ml-8 mr-8">
          <Giscus
            id="comments"
            repo="donaldboulton/mansbooks.com"
            repoId="R_kgDOI7HnKA"
            category="General"
            categoryId="DIC_kwDOI7HnKM4CU8od"
            mapping="pathname"
            term="Welcome to Angelina Jordan Comments!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
          />
        </div>
      </div>
    </>
  );
}
