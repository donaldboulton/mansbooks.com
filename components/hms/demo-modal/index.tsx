import React from "react";
import { ArrowRightIcon } from "@100mslive/react-icons";
import HmsLogo from "@components/icons/icon-hms";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../HmsButton";
import LinkButton from "../LinkButton";

const data = [
  {
    name: "Backstage",
    roleName: "backstage",
    role: "backstage",
    desc: `This role is meant for the event organizers. The backstage is like a stage admin - can add speakers, remove them, invite speakers on stage, kick them out of the event, etc`,
  },
  {
    name: "Speaker",
    roleName: "speaker",
    role: "speaker",
    desc: "This one is self explanatory. Use this role for folks who are going to be the main guests of the session. Speakers can also invite speakers on the stage, and respond to public chat messages.",
  },
  {
    name: "Listener",
    roleName: "listener",
    role: "listener",
    desc: `This one is the most basic role - can see and hear whatever is happening on the stage, cannot share their audio and video, and can put up messages on the public chat section.`,
  },
];

const DemoModal = () => {
  const [stage, setStage] = React.useState(``);
  const router = useRouter();
  React.useEffect(() => {
    if (router.query.slug) {
      setStage(router.query.slug as string);
    }
  }, [router]);
  return (
    <div className="nav-scroll mt-4 font-sans">
      <div className="my-0 text-[32px] font-semibold">
        Take your Webinar for a test drive
      </div>
      <div className="my-0 text-[15px] text-slate-300">
        There Are a few profiles to make it easy for you or your team to
        experience each perspective. Join in one click or share access with
        anyone else.
      </div>
      <div>
        {data.map((m) => (
          <div
            className="flex flex-col justify-between py-4 md:flex-row"
            style={{ borderBottom: "1px solid #323232" }}
            key={`${m.roleName}-${m.name}`}
          >
            <div className="max-w-xs text-left">
              <span className={`badge ${m.roleName}-badge`}>{m.roleName}</span>
              <div className="text-xs text-slate-300">{m.desc}</div>
            </div>
            <div className="flex items-center space-x-6">
              <CopyButton
                text={`${window.location.host}/stage/${stage || "a"}?role=${
                  m.role
                }`}
              />
              <LinkButton
                className="w-[200px]"
                href={`/stage/${stage || "a"}?role=${m.role}`}
              >
                Join as {m.name} <ArrowRightIcon height={20} />
              </LinkButton>
            </div>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-center ">
          Powered by <HmsLogo />
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

export const CopyButton = ({ text = "" }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="relative">
      {copied ? (
        <div className="absolute left-0 top-10 flex w-48 justify-center  rounded-lg bg-slate-900 p-2">
          Copied to clipboard!
        </div>
      ) : null}
      <Button variant="secondary" onClick={copy}>
        Invite
      </Button>
    </div>
  );
};
