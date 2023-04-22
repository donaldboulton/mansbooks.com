import Card from "./Card";
import Avatar from "../avatar";
import { useContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "../../contexts/UserContext";
import Preloader from "./Preloader";
import { Database } from "@lib/schema";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

type Posts = Database["public"]["Tables"]["posts"]["Row"];

export default function PostFormCard({ onPost }) {
  const [content, setContent] = useState("");
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const supabase = useSupabaseClient<Database>();
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [author, setAuthor] = useState<Posts["author"]>(null);
  const [photos, setPhotos] = useState<Posts["photos"]>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

  const session = useSession();
  const { profile } = useContext(UserContext);

  function createPost() {
    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        content,
        photos: uploads,
      })
      .then((response) => {
        if (!response.error) {
          setContent("");
          setUploads([]);
          if (onPost) {
            onPost();
          }
        }
      });
  }

  async function addPhotos(ev) {
    const files = ev.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from("photos")
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.SUPABASE_URL +
            "/storage/v1/object/public/photos/" +
            result.data.path;
          setUploads((prevUploads) => [...prevUploads, url]);
        } else {
          console.log(result);
        }
      }
      setIsUploading(false);
    }
  }

  return (
    <Card>
      <div className="flex gap-2">
        <div>
          <Avatar className="h-14 w-14" url={profile?.avatar_url} />
        </div>
        {profile && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-14 grow bg-slate-800 p-3 text-slate-300"
            placeholder={`Whats on your mind, ${profile?.username}?`}
          />
        )}
      </div>
      {isUploading && (
        <div>
          <Preloader />
        </div>
      )}
      {uploads.length > 0 && (
        <div className="flex gap-2">
          {uploads.map((upload) => (
            <div className="mt-2">
              <img src={upload} alt="" className="h-24 w-auto rounded-md" />
            </div>
          ))}
        </div>
      )}
      <div className="mt-2 flex items-center gap-5">
        <div>
          <label className="flex gap-1">
            <input
              type="file"
              className="hidden"
              multiple
              onChange={addPhotos}
            />
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
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="hidden md:block">Photos</span>
          </label>
        </div>
        <div>
          <button className="flex gap-1">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span className="hidden md:block">People</span>
          </button>
        </div>
        <div>
          <button className="flex gap-1">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="hidden md:block">Check in</span>
          </button>
        </div>
        <div>
          <button className="flex gap-1">
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
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <span className="hidden md:block">Mood</span>
          </button>
        </div>
        <div className="mr-2 grow text-right">
          <button
            onClick={createPost}
            className="rounded-md bg-socialBlue px-6 py-1 text-white"
          >
            Share
          </button>
        </div>
      </div>
    </Card>
  );
}
