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
    <Layout title="carlo_pascual">
      <MessageContainer>
        <BotMessage sender={"darrenveezy"} barColor={"green"}>
          <p>HelloW AND WELCOME!!!</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
