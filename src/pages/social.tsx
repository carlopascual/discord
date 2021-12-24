import type { NextPage } from "next";
import styled from "styled-components";

import BotMessage from "components/messages/bot";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const botname = "Carlo Bot 🤖";

const Home: NextPage = () => {
  return (
    <Layout title="social">
      <MessageContainer>
        <BotMessage
          sender={botname}
          barColor={
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
          }
        >
          <p>Instagram</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(14, 118, 168)"}>
          <p>LinkedIn</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>Github</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"#1b2838"}>
          <p>Steam</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
