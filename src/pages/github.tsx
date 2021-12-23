import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import BotMessage from "components/messages/bot";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const Home: NextPage = () => {
  return (
    <Layout title="github">
      <MessageContainer>
        <BotMessage sender={"darrenveezy"} barColor={"green"}>
          <p>This is the github page.</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
