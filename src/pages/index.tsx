import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import BotMessage from "components/messages/bot";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const Home: NextPage = () => {
  return (
    <Layout title='carlo_pascual'>
      <MessageContainer>
        <BotMessage sender={"Siri Bot 🤖"} barColor={"green"}>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
          <p>HelloW AND WELCOME!!!</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
