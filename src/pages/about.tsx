import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const sender = "carlopascual";

const Home: NextPage = () => {
  return (
    <Layout title="about">
      <MessageContainer>
        <RegularMessage sender={sender} message={"HELLO! And welcome!! 👋"} />
        <RegularMessage
          sender={sender}
          message={
            "I'm Carlo Pascual, a software engineer and a web developer."
          }
        />
        <RegularMessage
          sender={sender}
          message={"Currently based in Copenhagen, Denmark."}
        />
        <RegularMessage sender={sender} message={"I like games and code."} />
      </MessageContainer>
    </Layout>
  );
};

export default Home;
