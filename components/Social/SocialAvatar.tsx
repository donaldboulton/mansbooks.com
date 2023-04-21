import { uploadUserProfileImage } from "../../helpers/user";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Preloader from "./Preloader";

export default function SocialAvatar({ size, url, editable, onChange }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [isUploading, setIsUploading] = useState(false);
  async function handleAvatarChange(ev) {
    const file = ev.target.files?.[0];
    if (file) {
      setIsUploading(true);
      await uploadUserProfileImage(
        supabase,
        session.profile.id,
        file,
        "avatars",
        "avatar"
      );
      setIsUploading(false);
      if (onChange) onChange();
    }
  }
  let width = "w-12";
  if (size === "lg") {
    width = "w-24 md:w-36";
  }
  return (
    <div className={`${width} relative`}>
      <div className="overflow-hidden rounded-full">
        <img src={url} alt="" className="w-full" />
      </div>
      {isUploading && (
        <div className="absolute inset-0 flex items-center rounded-full bg-slate-900 bg-opacity-50">
          <div className="mx-auto inline-block">
            <Preloader />
          </div>
        </div>
      )}
      {editable && (
        <label className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-slate-900 p-2 shadow-md shadow-slate-800">
          <input type="file" className="hidden" onChange={handleAvatarChange} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </label>
      )}
    </div>
  );
}
