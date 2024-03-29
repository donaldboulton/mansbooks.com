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

import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import GithubIcon from "@components/icons/icon-github";
import { Speaker } from "@lib/types";
import ViewCounter from "@components/ViewCounter";
import { EyeIcon } from "@heroicons/react/24/outline";
import styles from "./speaker-section.module.css";

const TwitterIcon = () => (
  <svg
    width={24}
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z"
      fill="#D8D8D8"
    />
  </svg>
);

type Props = {
  speaker: Speaker;
};

export default function SpeakerSection({ speaker }: Props) {
  return (
    <>
      <div className="mb-24">
        <Link href="/speakers" className={styles.backlink}>
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
          Back to Speakers
        </Link>
        <div key={speaker.name} className={styles.container}>
          <div style={{ minWidth: "300px" }}>
            <Image
              alt={speaker.name}
              title={speaker.name}
              src={speaker.image.url}
              className={styles.image}
              loading="lazy"
              height={400}
              width={300}
            />
          </div>
          <div className={styles["speaker-details"]}>
            <div>
              <h1 className={styles.name}>{speaker.name}</h1>
              <div className={styles.title}>
                {`${speaker.title} @ `}
                <span className={styles.company}>{speaker.company}</span>
              </div>
              <div className="flex flex-row text-xs text-slate-300">
                <EyeIcon className="-mt-1 h-6 w-6 pr-2" />{" "}
                <ViewCounter slug={speaker.slug} />
              </div>
              <h2 className={styles["bio-header"]}>Bio</h2>
              <div className={styles.bio}>{speaker.bio}</div>
              <h3 className={styles["socials-header"]}>Social Media</h3>
              {speaker.twitter ? (
                <Link
                  aria-label="Twitter"
                  href={speaker.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-describedby="Twitter"
                  area-label="Twitter"
                >
                  <span className="flex flex-col items-center pr-2 md:flex-row">
                    <span className="mr-2">
                      <TwitterIcon />
                    </span>
                    {speaker.twitter}
                  </span>
                </Link>
              ) : (
                <span className={styles.disabled}>
                  <span className="flex flex-col items-center pr-2 md:flex-row">
                    <span className="mr-2">
                      <TwitterIcon />
                    </span>
                    {speaker.twitter}
                  </span>
                </span>
              )}
              {speaker.github ? (
                <Link
                  aria-label="GitHub"
                  className={styles.githubIcon}
                  href={speaker.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex flex-col items-center pr-2 md:flex-row">
                    <span className="mr-2">
                      <GithubIcon color="#D8D8D8" size={24} />
                    </span>
                    {speaker.github}
                  </span>
                </Link>
              ) : (
                <span className={cn(styles.githubIcon, styles.disabled)}>
                  <span className="flex flex-col items-center md:flex-row">
                    <span className="mr-2">
                      <GithubIcon color="#D8D8D8" size={24} />
                    </span>
                    {speaker.github}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
        {speaker.talk && (
          <div className={styles["talk-details"]}>
            <h3 className={styles["socials-header"]}>{speaker.talk.title}</h3>
            <div>{speaker.talk.description}</div>
          </div>
        )}
      </div>
    </>
  );
}
