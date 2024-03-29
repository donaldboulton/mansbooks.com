import {
  useHMSStore,
  selectLocalPeer,
  selectPeersByRole,
} from "@100mslive/react-sdk";
import React from "react";
import HmsAvatar from "../HmsAvatar";
import Dropdown from "./Dropdown";

const Participants = () => {
  const stagePeers = useHMSStore(selectPeersByRole("stage"));
  const backstagePeers = useHMSStore(selectPeersByRole("backstage"));
  const inviteePeers = useHMSStore(selectPeersByRole("invitee"));
  const viewerPeers = useHMSStore(selectPeersByRole("viewer"));
  const localPeer = useHMSStore(selectLocalPeer);
  return (
    <div className="nav-scroll h-full p-4 text-foreground">
      {backstagePeers.length > 0 && localPeer.roleName === "backstage" ? (
        <>
          <div>
            <div>Moderator ({backstagePeers.length})</div>
            {backstagePeers.map((p) => (
              <div key={p.id} className="my-4 flex items-center">
                <HmsAvatar name={p.name} />
                <div className="ml-4 grow">
                  {p.name} {p.id !== localPeer.id ? null : "(You)"}{" "}
                </div>
                {p.id !== localPeer.id ? (
                  <Dropdown role={p.roleName || "viewer"} id={p.id} />
                ) : null}
              </div>
            ))}
          </div>
          <Divider />
        </>
      ) : null}
      {stagePeers.length > 0 ? (
        <div>
          <div className="flex items-center">Speaker ({stagePeers.length})</div>
          {stagePeers.map((p) => (
            <div key={p.id} className="my-4 flex items-center">
              <HmsAvatar name={p.name} />
              <div className="ml-4 grow">
                {p.name} {p.id !== localPeer.id ? null : "(You)"}
              </div>
              {p.id !== localPeer.id ? (
                <Dropdown role={p.roleName || "viewer"} id={p.id} />
              ) : null}
            </div>
          ))}
          <Divider />
        </div>
      ) : null}

      {inviteePeers.length > 0 ? (
        <div>
          <div className="flex items-center">
            Guest Speakers ({inviteePeers.length})
          </div>
          {inviteePeers.map((p) => (
            <div key={p.id} className="my-4 flex items-center">
              <HmsAvatar name={p.name} />
              <div className="ml-4 grow">
                {p.name} {p.id !== localPeer.id ? null : "(You)"}
              </div>
              {localPeer.roleName === "stage" ||
              localPeer.roleName === "backstage" ? (
                <Dropdown id={p.id} role={p.roleName || "viewer"} />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {viewerPeers.length > 0 ? (
        <div>
          <div className="flex items-center">
            Viewers ({viewerPeers.length})
          </div>
          {viewerPeers.map((p) => (
            <div key={p.id} className="my-4 flex items-center">
              <HmsAvatar name={p.name} />
              <div className="ml-4 grow">{p.name} </div>
              <Dropdown role={p.roleName || "viewer"} id={p.id} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Participants;

const Divider = () => <div className="my-8 h-[1px] bg-slate-700" />;
