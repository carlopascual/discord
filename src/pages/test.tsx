import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import BotMessage from "components/messages/bot";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const botname = "Carlo Bot 🤖";
const Home: NextPage = () => {
  return (
    <Layout title="test">
      <MessageContainer>
        <BotMessage sender={botname} barColor={"purple"}>
          <h1>Strapi.io</h1>
          <p>This is the test page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"red"}>
          <p>This is the test page #2</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
