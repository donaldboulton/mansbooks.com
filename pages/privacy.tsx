import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Center from "../components/Center";
import LeftText from "../components/LeftText";
import ColumnGridTwo from "../components/column-grid";
import UserProfile from "../components/UserProfile";
import Section from "../components/Section";
import VideoWrapper from "../components/VideoWrapper";
import SingleAccordion from "../components/SingleAccordion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import about from "../public/about.jpg";
import cookies from "../public/cookies.png";
import CalloutDanger from "@components/Callout/CalloutDanger";
import angie from "../../public/angie/angelina.jpg";

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy",
              url: "https://mansbooks.com/privacy",
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
              description: "Mansbooks Privacy Page",
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
                url: "data:image/png;base64,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",
              },
              name: "MansBooks",
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
                    "@id": "https://mansbooks.com/search",
                    name: "MansBooks Privacy",
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
      <div className="mx-8 mt-8 mb-32">
        <Center>Privacy Policy / Terms of Usage</Center>
        <Image
          alt="Privacy"
          title="Privacy"
          src={about}
          className="h-20 w-20 opacity-60"
          loading="lazy"
          height={450}
          width={1400}
        />
        <h2>User data is encrypted</h2>
        <p>⚓ The privacy of my visitors is extremely important.</p>
        <p>
          This Privacy Policy outlines the types of personal information that is
          received and collected and how it is used.
        </p>
        First and foremost, I will never share your email address or any other
        personal information to anyone without your direct consent.
        <h2>Log Files</h2>
        <Section>
          🏴󠁡󠁦󠁬󠁯󠁧󠁿 Like many other websites, this site uses log files to help
          learn about when, from where, and how often traffic flows to this
          site. The information in these log files include: - Internet Protocol
          addresses (IP) - Types of browser - Internet Service Provider (ISP) -
          Date and time stamp - Referring and exit pages - Number of clicks All
          of this information is not linked to anything that is personally
          identifiable.
        </Section>
        <h2> Cookies Beacons</h2>
        <Section>
          🍪 When you visit this site "convenience" cookies are stored on your
          computer when you submit a comment to help you log in faster to 🔗{" "}
          <a
            href="https://twitter.com/donboulton"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Don Boulton Twitter"
            area-label="Don Boulton Twitter"
          >
            Twitter
          </a>
          the next time you do a tweet.
        </Section>
        <Section>
          <LeftText>Cookies Purpose and Usage</LeftText>
          <ColumnGridTwo>
            <UserProfile
              buttonLink="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              title="Cookie"
              titleLink="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              link="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              description="Cookies Explained"
            >
              <Image
                alt="cookies"
                title="Cookies"
                src={cookies}
                className="h-20 w-20"
                loading="lazy"
                height={80}
                width={80}
              />
            </UserProfile>
            <VideoWrapper>
              <LiteYouTubeEmbed id="yoE9-tNvhRs" title="Cookies Explained" />
            </VideoWrapper>
          </ColumnGridTwo>
        </Section>
        <Section>
          Third-party advertisers may also place and read cookies on your
          browser and / or use web beacons to collect information. This site has
          no access or control over these cookies. You should review the
          respective privacy policies on any and all third-party ad servers for
          more information regarding their practices and how to opt-out. If you
          wish to disable cookies, you may do so through your web browser
          options. Instructions for doing so can be found on the specific web
          browsers' websites.
        </Section>
        <h2>Cookies in EU Law</h2>
        <SingleAccordion label="Cookies Confusion">
          ⚖️ The Law
          <p>
            🔗{" "}
            <a
              href="https://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too/"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="EU's cookie law confusing you too"
              area-label="EU's cookie law confusing you too"
            >
              Is the EU's cookie law confusing you too?
            </a>
          </p>
          🔗{" "}
          <a
            href="https://ec.europa.eu/info/cookies_en"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="EU cookie law e-Privacy Directive"
            area-label="EU cookie law e-Privacy Directive"
          >
            New EU cookie law e-Privacy Directive
          </a>
          <p>
            🔗{" "}
            <a
              href="https://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Cookies Doing nothing isn't the right answer"
              area-label="Cookies Doing nothing isn't the right answer"
            >
              Cookies Doing nothing isn't the right answer.
            </a>
          </p>
        </SingleAccordion>
        <h2>Disabling Cookies</h2>
        <Section>
          ❌ If you would like to restrict the use of cookies you can control
          this in your Internet browser. Links to advice on how to do this for
          the most popular Internet browsers are provided below for convenience
          and will be available for the Internet browser of your choice either
          online or via the software help (normally available via key F1).
        </Section>
        <SingleAccordion label="Disable in the Browser">
          <p>
            🔗 \*{" "}
            <a
              href="https://www.cookiesandyou.com/disable-cookies/windows/edge/"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="MS Edge"
              area-label="MS Edge"
            >
              Disabling cookies in MS Edge
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647&p=cpn_cookies"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Chrome"
              area-label="Chrome"
            >
              Disabling cookies in Google Chrome
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Firefox"
              area-label="firefox"
            >
              Disabling cookies in Mozilla Firefox
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Safari"
              area-label="Safari"
            >
              Disabling cookies in Apple Safari
            </a>
          </p>
        </SingleAccordion>
        <h2>Angelina Jordan UI cookies</h2>
        <Section>
          CookieHub is a complete cookie consent solution that you can easily
          integrated with any website. The cookie consent plugin can be
          customized to match your brand and is compliant with cookie laws,
          including GDPR. To adjust cookie settings in Angelina Jordan look to
          the left bottom left of this page, click the gear icon and follow the
          instructions.
        </Section>
        <h2>Google Analytics</h2>
        <Section>
          📈 The cookies in use to deliver Google Analytics service are
          described below. Returning, New Session, Time, Custom Variable Data,
          Source
        </Section>
        <h2>Analytics Cookie Types</h2>
        <Section>
          <p>- \_\_utma</p>
          🤚 This cookie is used to determine new and returning visitors. It has
          an expiration time of 2 years. If the ga.js library is executed and no
          \_utma cookie exists, this will be recorded as the users’ first visit
          and a \_utma cookie will be set. If a \_utma cookie is already in
          place, the expiration time is reset and the user is recorded as a
          return visitor.
          <p>- \_\_utmb</p>
          🤚 This cookie is used to determine a new session. The cookie is set
          when the ga.js library executes and there is no \_utmb cookie in
          place. It has an expiration time of 30 minutes, therefore if a user is
          inactive for a period longer than this, a new cookie will be set when
          the library executes and the interaction will be recorded as a new
          session.
          <p>- \_\_utmz</p>
          🤚 This cookie is used to determine the traffic source, medium,
          campaign name and campaign term which delivered the user to your
          website. It is created when the javaScript library executes and
          expires after 6 months. This helps Google collect the data which can
          then help them to determine which traffic sources assist conversions
          within the multi-channel section of Analytics.
          <p>- \_\_utmc</p>
          🤚 This Cookie waits 30 minutes, and then it expires. You see,
          \_\_utmc has no way of knowing when a user closes their browser or
          leaves a website, so it waits 30 minutes for another pageview to
          happen, and if it doesn’t, it expires. And is used to store
          information, such as what time your current visit occurred, whether
          you have been to the site before, and what site referred you to the
          web page.
          <p>
            From Stackoverflow: 🔗{" "}
            <a
              href="https://stackoverflow.com/questions/1823406/what-does-utma-mean"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Stackoverflow"
              area-label="Stackoverflow"
            >
              What does \_\_utma mean?
            </a>
          </p>
          <p>- \_\_utmv</p>
        </Section>
        <Section>
          <p>
            🤚 This cookie is used for storing visitor-level custom variable
            data. It is created when the \_setCustomVar method is used with a
            visitor level custom variable. Like the \_utma cookie, this cookie
            expires after 2 years and is reset each time the user visits your
            site before the expiration of the cookie.
          </p>
          Although each of these cookies has a set expiration time, each time
          the ga.js library is executed and the expiration time has not been met
          the cookie is updated, resetting the expiration date to its original
          value.
          <p>
            These cookies contain no personally identifiable information but
            they will use your computer's IP address to know from where in the
            world you are accessing the Internet.
          </p>
          Google stores the information collected by these cookies on servers in
          the United States. Google may transfer this information to
          third-parties where required to do so by law, or where such
          third-parties process the information on Google's behalf.
        </Section>
        <h3>Opt-out</h3>
        <Section>
          😜 In order to provide website visitors with more choice on how data
          is collected by Google Analytics, Google has developed the Google
          Analytics Opt-out Browser Add-on. The add-on communicates with the
          Google Analytics JavaScript (ga.js) to stop data being sent to Google
          Analytics. The Google Analytics Opt-out Browser Add-on does not affect
          usage of the website in any other way. A link to further information
          on the Google Analytics Opt-out Browser Add-on is provided below for
          your convenience.
        </Section>
        <h2>Opt Out Google tools</h2>
        <p>
          🔗{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=None"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Google tools"
            area-label="Google tools"
          >
            Opt Out Google tools
          </a>
        </p>
        <Section>
          ⚒️ For more information on the usage of cookies by Google Analytics
          please see the Google website. A link to the privacy advice for this
          product is provided below for your convenience.
        </Section>
        <h2> Hubspot</h2>
        <Section>
          <p>- \_\_hstc Cookie</p>
          🥠 About this cookie \_\_hstc
          <p>
            This cookie name is associated with websites built on the HubSpot
            platform. It is reported by them as being used for website
            analytics.
          </p>
          The main purpose of this cookie is: Performance
        </Section>
        <h4>Key numbers for \_\_hstc</h4>
        <Section>
          🗝️ Cookies with this name have been found on 316 websites, set by 269
          host domains. It has been found as a First Party cookie on 277
          websites and a Third Party cookie on 71 websites. It has been found as
          a Persistent cookie on 348 websites, with an average life span of 725
          days. It has been found as a Session cookie on 0 websites. Note: Many
          technologies or services use cookies that will be common to different
          websites and can be identified by name alone. However this is not
          always true. More specific information can sometimes be found with a
          website based search.
        </Section>
        <h2>Privacy Google</h2>
        <p>
          🔗{" "}
          <a
            href="https://www.google.com/analytics/learn/privacy.html"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Google Privacy"
            area-label="Google Privacy"
          >
            Google Analytics Privacy Policy
          </a>
        </p>
        <Section>
          🗠 Google Analytics is a web analytics tool I use to help understand
          how visitors engage with this website. It reports website trends using
          cookies and web beacons without identifying individual visitors.
        </Section>
        <h2>Read Analytics Policy</h2>
        <Section>
          <p>
            🔗{" "}
            <a
              href="https://www.google.com/analytics/learn/privacy.html"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Analytics Privacy"
              area-label="Analytics Privacy"
            >
              Google Analytics Privacy Policy
            </a>
          </p>
          <h2> Google AdSense</h2>
          💹 Google AdSense, a third party affiliate marketing network, uses
          cookies to help make sure I get a commission when you buy a product
          after clicking on a link or ad banner that takes you to the site of
          one of their merchants.
        </Section>
        <h2>Read AdSense Policy</h2>
        <p>
          🔗{" "}
          <a
            href="https://support.google.com/adsense/bin/answer.py?hl=en&answer=48182"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="AdSense Privacy"
            area-label="AdSense Privacy"
          >
            Google AdSense Privacy Policy
          </a>
        </p>
        <h2>Create Your Own</h2>
        <Section>🦸 Google AdSense Privacy Policy creator</Section>
        <p>
          🔗{" "}
          <a
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Privacy Policy Creator"
            area-label="Privacy Policy Creator"
          >
            Privacy Policy Creator Google
          </a>
        </p>
        <h2> Donation Policy</h2>
        <Section>
          🩸 All Donations thought our external pay sites and or through our
          PayPal buttons will not be refundable, as they are a donation to a
          free website designer, that has limited ability's to do money
          transfers back to you. Thank You for your donations to mansbooks.com.
          <h2> Comment Policy</h2>
          🩸 We want you to feel at home when you post a comment on
          mansbooks.com. We want everyone to feel at home posting comments on
          mansbooks.com. We don’t know what your home is like, but we know how
          we expect people to behave when they visit ours. That’s why we reserve
          the right to delete comments and ban users as needed to keep the
          comment threads here civil and substantive.
        </Section>
        <CalloutDanger>
          <h2>1 house rule is simple</h2>
          <h2>Don’t be a jerk</h2>
          <Section>
            Want to be the kind of commenter we’d love to bring home to
            Thanksgiving dinner? Here’s what we like to see in comments: Weigh
            in with smart, informed ideas that contribute further to the story.
            Give us useful, constructive criticism. Spot a typo or an error? Let
            us know and we will correct it. Demonstrate and share the
            intelligence, wisdom, and humor we know you possess.
          </Section>
          <h2>Chat and Webinar Conduct</h2>
          <SingleAccordion label="Code of Conduct">
            <Section>
              This is the Code of Conduct for your online event. If you would
              like to use it, please replace [Event Name] and [Event Email]
              below.
              <p>
                At [Event Name] we believe in **inclusivity**, **kindness** and
                a **positive** community for all. We expect participants of
                [Event Name] to conduct themselves in a **professional** and
                **respectful** manner at all times.
              </p>
            </Section>
            <Section>
              <p>
                This means: **Do:** - Use welcoming and positive language -
                Respect others views whether they do/don’t align with yours
              </p>
              - Display empathy towards other community members - Be respectful
              of others in the public & private media **Don't:** - Make personal
              or political attacks - Harass another person, whether publicly or
              privately - Use sexualized language or make nonconsensual sexual /
              nonsexual advances - Use another person's property whether
              physical or electronic, without their permission - Do any other
              actions that can be interpreted as inappropriate in a professional
              setting **NOTE**: Permission and consent can be revoked at any
              given time. Once it has been revoked, it is no longer acceptable
              to continue a certain act, conversation or interaction with all
              involved parties whom no longer wish to take part.
            </Section>
            <Section>
              <p>
                **If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact the
                organizers immediately at [Event Email].** --- [Event Name] is
                dedicated to providing a harassment-free conference experience
                for everyone, regardless of gender, gender identity and
                expression, age, sexual orientation, disability, physical
                appearance, body size, race, ethnicity, religion (or lack
                thereof), location, or technology choices.
              </p>
            </Section>
            <Section>
              <p>
                We do not tolerate harassment of conference participants in any
                form. Sexual language and imagery are not appropriate anywhere,
                including talks, chat rooms, Twitter and other online media.
                Conference participants violating these rules may be expelled
                from the conference at the discretion of the conference
                organizers.
              </p>
            </Section>
            <Section>
              <p>
                Harassment includes offensive verbal comments related to gender,
                gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, race, ethnicity,
                religion, technology choices, sexual images on any media,
                deliberate intimidation, stalking, following, sustained
                disruption of talks or other events, and unwelcome sexual
                attention. Participants asked to stop any harassing behavior are
                expected to comply immediately.
              </p>
            </Section>
            <Section>
              <p>
                Sponsors and speakers are also subject to the anti-harassment
                policy. Sponsors and speakers may not use sexualized images,
                activities, or other material during their talks or any media in
                relation to the conference.
              </p>
            </Section>
            <Section>
              <p>
                If a participant engages in harassing behavior, the conference
                organizers may take any action they deem appropriate, including
                warning the offender or expulsion from any private, online
                conference platforms. We expect participants to follow these
                rules at all conference platforms.
              </p>
            </Section>
          </SingleAccordion>
        </CalloutDanger>
        <h2> Disclosure Policy</h2>
        <Section>
          🩸 I make money on this website through affiliate programs. If you
          click an affiliate link or ad banner and buy the product, you help
          support this website because I'll get a percentage of that sale.
        </Section>
        Donald Boulton and this 🔗{" "}
        <a
          href="https://mansbooks.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-describedby="AJ Official"
          area-label="AJ Official"
        >
          Angelina Jordan's
        </a>{" "}
        🗸 Website is a Affiliate for Google AdSense.
        <Section>
          What this means for you: - I became an affiliate to earn revenue
          towards the costs of running and maintaining this website. Where I
          have direct control over which ads are served on this website I offer
          only products that are directly related to the topic of this website
          and products that a reader/subscriber would have a genuine interest in
          or need of. - I do not and will not recommend a product just for the
          sake of making money. - I do not let the compensation I receive
          influence the content, topics, posts, or opinions expressed on this
          website. - I respect and value my readers too much to write anything
          other than my own genuine and objective opinions and advice. Just like
          this website, my Disclosure Policy is a work in progress. As the
          revenue streams evolve, so will this page.
        </Section>
        <Section>
          <h2>License OBSD</h2>
          🔰 The 0BSD (Zero-Clause BSD) license.
          <p>Copyright (C) [year] by [copyright holder] [email]</p>
          <p>
            Permission to use, copy, modify, and/or distribute this software for
            any purpose with or without fee is hereby granted.
          </p>
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
          WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
          WARRANTIES OF MERCHANTABILITY AND FITNESS.
          <p>
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
            RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
            CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
            CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
          </p>
        </Section>
        <Section>
          <h2>Attribution</h2>
          Everything Under Father God
        </Section>
        <h2>Purchases</h2>
        <h2>Purchase Policy</h2>
        <h3>Return Policy working</h3>
      </div>
    </Layout>
  );
}
