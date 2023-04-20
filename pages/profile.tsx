import SocialLayout from "@components/Social/SocialLayout";
import Layout from "@components/PageLayout";
import Card from "@components/Social/Card";
import Avatar from "@components/Social/SocialAvatar";
import Link from "next/link";
import PostCard from "@components/Social/PostCard";
import { useRouter } from "next/router";
import FriendInfo from "@components/Social/FriendInfo";
import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Cover from "@components/Social/Cover";
import ProfileTabs from "@components/Social/ProfileTabs";
import ProfileContent from "@components/Social/ProfileContent";
import { UserContextProvider } from "../contexts/UserContext";

export default function SocialProfile() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const router = useRouter();
  const tab = router?.query?.tab?.[0] || "posts";
  const session = useSession();
  const userId = router.query.id;

  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchUser();
  }, [userId]);

  function fetchUser() {
    supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setProfile(result.data[0]);
        }
      });
  }

  function saveProfile() {
    supabase
      .from("profiles")
      .update({
        name,
        place,
      })
      .eq("id", session.user.id)
      .then((result) => {
        if (!result.error) {
          setProfile((prev) => ({ ...prev, name, place }));
        }
        setEditMode(false);
      });
  }

  const isMyUser = userId === session?.user?.id;

  return (
    <Layout>
      <SocialLayout>
        <UserContextProvider>
          <Card noPadding={true}>
            <div className="relative overflow-hidden rounded-md">
              <Cover
                url={profile?.cover}
                editable={isMyUser}
                onChange={fetchUser}
              />
              <div className="absolute left-4 top-24 z-20">
                {profile && (
                  <Avatar
                    url={profile.avatar}
                    size={"lg"}
                    editable={isMyUser}
                    onChange={fetchUser}
                  />
                )}
              </div>
              <div className="p-4 pb-0 pt-0 md:pt-4">
                <div className="ml-24 flex justify-between md:ml-40">
                  <div>
                    {editMode && (
                      <div>
                        <input
                          type="text"
                          className="rounded-md border px-3 py-2"
                          placeholder={"Your name"}
                          onChange={(ev) => setName(ev.target.value)}
                          value={name}
                        />
                      </div>
                    )}
                    {!editMode && (
                      <h1 className="text-3xl font-bold">{profile?.name}</h1>
                    )}
                    {!editMode && (
                      <div className="leading-4 text-slate-400">
                        {profile?.place || "Internet"}
                      </div>
                    )}
                    {editMode && (
                      <div>
                        <input
                          type="text"
                          className="mt-1 rounded-md border px-3 py-2"
                          placeholder={"Your location"}
                          onChange={(ev) => setPlace(ev.target.value)}
                          value={place}
                        />
                      </div>
                    )}
                  </div>
                  <div className="grow">
                    <div className="text-right">
                      {isMyUser && !editMode && (
                        <button
                          onClick={() => {
                            setEditMode(true);
                            setName(profile.name);
                            setPlace(profile.place);
                          }}
                          className="mx-1 inline-flex gap-1 rounded-md bg-slate-900 px-2 py-1 shadow-sm shadow-slate-500"
                        >
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
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                          Edit profile
                        </button>
                      )}
                      {isMyUser && editMode && (
                        <button
                          onClick={saveProfile}
                          className="mx-1 inline-flex gap-1 rounded-md bg-slate-900 px-2 py-1 shadow-sm shadow-slate-500"
                        >
                          Save profile
                        </button>
                      )}
                      {isMyUser && editMode && (
                        <button
                          onClick={() => setEditMode(false)}
                          className="mx-1 inline-flex gap-1 rounded-md bg-slate-900 px-2 py-1 shadow-sm shadow-slate-500"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <ProfileTabs active={tab} userId={profile?.id} />
              </div>
            </div>
          </Card>
          <ProfileContent activeTab={tab} userId={userId} />
        </UserContextProvider>
      </SocialLayout>
    </Layout>
  );
}
