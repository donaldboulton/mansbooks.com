import React from "react";
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import Button from "./HmsButton";
import { InviteIcon, PersonIcon } from "@100mslive/react-icons";
import { selectLocalPeerRole } from "@100mslive/react-sdk";
import { useHMSStore } from "@100mslive/react-sdk";
import { ChangeRoleDialog } from "./demo-cta/room-cta";
import { useRouter } from "next/router";

const EmptyRoom = () => {
  const role = useHMSStore(selectLocalPeerRole) || "viewer";
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let stageId = `a`;
    if (router.isReady) {
      stageId = router.query.slug as string;
    }
    // @ts-ignore
    navigator.clipboard.writeText(
      `${window.location.host}/stage/${stageId}?role=${role.name}`,
    );
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ height: "calc(100vh - 3.2 * var(--header-height))" }}
    >
      <h2 className="text-3xl ">No Speakers Present</h2>
      <div className="text-sm text-slate-300">
        Looks like nobody has joined as a speaker. Invite someone to speak or
        change your role.
      </div>
      <div className="mt-8 flex space-x-4">
        <div className="relative">
          {copied ? (
            <div className="absolute left-0 top-12 flex w-48 justify-center  rounded-lg bg-slate-900 p-2">
              Copied to clipboard!
            </div>
          ) : null}
          <Button onClick={() => copy()} variant="secondary">
            <InviteIcon className="mr-2" /> Invite
          </Button>
        </div>

        <ChangeRoleDialog>
          <Button>
            <PersonIcon className="mr-2" /> Change Role
          </Button>
        </ChangeRoleDialog>
      </div>
    </div>
  );
};

export default EmptyRoom;
