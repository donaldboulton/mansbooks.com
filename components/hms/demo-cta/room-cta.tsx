import React from "react";
import { useState, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon, PersonIcon } from "@100mslive/react-icons";
import DemoModal from "../demo-modal";
import InviteIcon from "@components/icons/icon-invite";
import { useHMSStore, selectLocalPeerRole } from "@100mslive/react-sdk";
import { useRouter } from "next/router";
import Button from "../Button";

const RoomCta = () => {
  const role = useHMSStore(selectLocalPeerRole);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let stageId = `a`;
    if (router.isReady) {
      stageId = router.query.slug as string;
    }
    navigator.clipboard.writeText(
      `${window.location.host}/stage/${stageId}?role=${role?.name || "viewer"}`
    );
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {copied ? (
          <p className="absolute left-0 top-12 flex w-48 justify-center  rounded-lg bg-slate-600 p-2">
            Copied to clipboard!
          </p>
        ) : null}
        <Button variant="secondary" className="h-[40px]" onClick={() => copy()}>
          <InviteIcon className="mr-2" />
          Invite
        </Button>
      </div>

      <ChangeRoleDialog>
        <Button className='className="h-[40px]"' variant="secondary">
          <PersonIcon height={20} className="mr-2" />
          Roles
        </Button>
      </ChangeRoleDialog>
    </div>
  );
};

export default RoomCta;

export const ChangeRoleDialog: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Overlay
        className="fixed inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content className="dialog-content dialog-animation nav-scroll h-[600px] w-[95%] rounded-lg bg-slate-800 text-center md:h-[700px] md:w-[700px]">
        <Dialog.Close asChild className="flex w-full justify-end">
          <button>
            <CrossIcon />
          </button>
        </Dialog.Close>
        <DemoModal />
      </Dialog.Content>
    </Dialog.Root>
  );
};
