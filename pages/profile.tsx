import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "@components/layout";
import Section from "@components/Section";
import Center from "@components/Center";
import styles from "../components/sponsors-grid.module.css";
import suspiciousMinds from "../public/suspiciousminds.jpg";
import angie from "../public/angie/angelina.jpg";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "License",
              url: "https://mansbooks.com/profile",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              publisher: {
                "@type": "Organization",
                name: "Mansbooks",
              },
              license: "http://mansbooks.com/license",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://mansbooks.com",
              "@type": "Organization",
              address: "OKC, Middle Earth",
              contactPoint: {
                "@type": "ContactPoint",
                email: "donaldboulton@gmail.com",
                telephone: "+405-863-2165",
              },
              description: "Mansbooks Profile Page",
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "OKC, Middle Earth",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              logo: {
                "@type": "ImageObject",
                url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
              },
              name: "MansBooks OSBD license",
              sameAs: [
                "mailto:donaldboulton@gmail.com",
                "tel:+405-863-2165",
                "https://www.facebook.com/donboulton",
                "https://www.instagram.com/boulton3662",
                "https://twitter.com/donboulton",
                "https://www.linkedin.com/donboulton",
                "https://github.com/donaldboulton/",
              ],
              url: "https://mansbooks.com",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://donboulton.com",
              name: "Donald Boulton",
              url: "https://donboulton.com",
              worksFor: {
                "@id": "https://mansbooks.com",
              },
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              description: "Breadcrumbs list",
              itemListElement: [
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/",
                    name: "MansBooks Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/profile",
                    name: "MansBooks Profile",
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
            ,
          </script>
        </>
        ,
      </Head>
      <div className="mr-10 ml-12 mb-6 mt-20">
        <Center>Angelina Jordan</Center>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              alt="NextJs"
              title="Angelina Jordan"
              src={suspiciousMinds}
              className="rounded-lg opacity-70"
              loading="lazy"
              height={327}
              width={600}
            />
          </div>
          <div>
            <div>
              <a
                href="https://youtube.com/c/AngelinaJordanOfficial"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="About Angelina Jordan"
                area-label="About Angelina Jordan"
              >
                <h2>For those who don't know about Queen Angelina Jordan</h2>
              </a>
            </div>
            <div>
              Angelina Jordan Astar was born and raised in Oslo, Norway; this
              world-renowned singer has earned fantastic reviews for the amazing
              breadth, depth and maturity of her vocal talent that simply belies
              her young age.
              <div>
                Angelina’s videos have received over several billions views on
                YouTube and more than 4 billion views on Facebook.
              </div>
              <div>
                Amazingly, her passion for music began at just one-and- a-half
                years of age when Angelina first saw Whitney Houston on YouTube
                performing I Will Always Love You. Whitney - and later Billie
                Holiday, Dinah Washington - became her first major musical
                influences. At the age of seven, Angelina auditioned for
                Norway’s Got Talent performing Billie Holiday’s Gloomy Sunday.
                She won the competition with the show drawing record TV
                audiences.
              </div>
            </div>
          </div>
        </div>
        <div>
          Not surprisingly, throughout her rising career, Angelina has featured
          in prominent media outlets including TIME, CNN, BBC, and People while
          also performing on the U.S. network TV shows Little Big Shots and The
          View.
        </div>
        <div>
          In 2016, Avicii chose Angelina for the vocals on his worldwide Volvo
          commercial campaign, a brilliant cover of Nina Simone’s Feeling Good.
        </div>
        <div>
          As well as singing before Nobel Peace Prize Laureates, charitable
          causes to which Angelina has given her talent include the Rainforest
          Alliance at the American Museum of Natural History in New York and Ein
          Herz für Kinder in Berlin where she helped raise over 21 Million Euros
          for children and families in need.
        </div>
        <div>
          This multi-talented singing prodigy has also written a successful,
          illustrated children’s book in her native Norway making Angelina the
          youngest published author in the country’s history. Based on the true
          story of when she was six years old, Angelina met a homeless, shoeless
          girl. After they talked for a long time, she gave the girl her shoes
          and vowed never to appear on stage again wearing shoes until all the
          world’s children had them. Since that time, Angelina has always
          performed barefoot in public.
        </div>
        <Section>
          <div>
            Angelina Jordan (barefoot queen) is the winner of Norway got talent
            2014. She also auditioned for America's got talent in 2020 where she
            received GOLDEN BUZZER from Heidi Klum. Currently, she signed with
            Republic records. August 2020.
          </div>
        </Section>
      </div>
      <Center>Extended Profile Information:{" "}</Center>
      <div
        className="mt-4 mb-20"
      >
        <div className={styles.grid}>
          <div>
            <a
              href="https://angelinajordanofficial.com"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan"
              area-label="Angelina Jordan"
            >
              🔗 Angelina Jordan official Website
            </a>
          </div>
          <div>
            <a
              href="https://angelina-jordan-official-store.creator-spring.com/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Built with NextJs"
              area-label="Built with NextJs"
            >
              🔗 Angelina Jordan Official Store
            </a>
          </div>
          <div>
            <a
              href="https://youtube.com/c/AngelinaJordanOfficial"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan YouTube Channel"
              area-label="Angelina Jordan YouTube Channel"
            >
              🔗 Angelina Jordan YouTube
            </a>
          </div>
          <div>
            <a
              href="https://youtube.com/c/AngelinaJordanCoverChannel"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan Cover Offical"
              area-label="Angelina Jordan Cover Offical"
            >
              🔗 Angelina Jordan Covers
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/angelinajordana/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan Instagram"
              area-label="Angelina Jordan Instagram"
            >
              🔗 Angelina Jordan Instagram
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/angelinajordanofficial"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan Facebook"
              area-label="Angelina Jordan Facebook"
            >
              🔗 Angelina Jordan Facebook
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/angelinajordana"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan Twitter"
              area-label="Angelina Jordan Twitter"
            >
              🔗 Angelina Jordan Twitter
            </a>
          </div>
          <div>
            <a
              href="https://www.tiktok.com/@angelinajordana/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan"
              area-label="Angelina Jordan"
            >
              🔗 Angelina Jordan TikTok
            </a>
          </div>
          <div>
            <a
              href="https://angelinajordandatabase.com/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Angelina Jordan Database"
              area-label="Angelina Jordan Database"
            >
              🔗 Angelina Jordan Database
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
