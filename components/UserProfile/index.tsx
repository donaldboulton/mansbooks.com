import React from "react";
import { ReactNode, FC } from "react";

interface UserProfileProps {
  children: ReactNode;
  link: string;
  buttonLink: string;
  description: string;
  title: string;
  titleLink: string;
}

const UserProfile: FC<UserProfileProps> = (props) => {
  const { children, link, buttonLink, description, title, titleLink } = props;
  return (
    <>
      <div classNameName="left-0 mx-1 w-80 flex-none flex-nowrap">
        <div className="mx-auto max-w-sm space-y-1 rounded-xl px-2 py-1 shadow-lg sm:flex sm:items-center sm:space-x-4 sm:space-y-0 sm:py-1">
          <div classNameName="justify-left w-24">{children}</div>
          <div classNameName="space-y-1 text-center sm:text-left">
            <div className="space-y-0.5">
              <div className="text-lg font-semibold text-black">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby={description}
                >
                  {description}
                </a>
              </div>
              <div className="font-medium text-slate-500">
                <a
                  href={titleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby={title}
                >
                  {title}
                </a>
              </div>
            </div>
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="Contact"
            >
              <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
