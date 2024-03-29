import { useState } from "react";
import { PageState, ConfDataContext, UserData } from "@lib/hooks/use-conf-data";
import Ticket from "./ticket";
import Form from "./form";
import Layout from "./Layout";
import ConfContainer from "./conf-container";
import Hero from "./hero";
import LearnMore from "./learn-more";
import Center from "./Center";
import CloudinaryVideo from "./CloudinaryVideo/rounded";

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = "registration",
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState,
      }}
    >
      <Layout>
        <ConfContainer>
          {pageState === "registration" && !sharePage ? (
            <>
              <Hero />
              <Center>Love Don't Let Me Go!</Center>
              <Center>Visualizer</Center>
              <CloudinaryVideo />
              <Form />
              <LearnMore />
            </>
          ) : (
            <Ticket
              username={userData.username}
              name={userData.name}
              ticketNumber={userData.ticketNumber}
              sharePage={sharePage}
            />
          )}
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  );
}
