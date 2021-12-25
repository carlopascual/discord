import type { NextPage } from "next";
import styled from "styled-components";
import useInterval from "use-interval";
import { useState } from "react";

import BotMessage from "components/messages/bot";
import RegularMessage from "components/messages/regular";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const botname = "Siri Bot 🤖";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      setCount(count + 1);
    },
    count <= 7 ? 1000 : null
  );

  return (
    <Layout title='experience'>
      <MessageContainer>
        {count >= 1 && (
          <RegularMessage
            sender='carlopascual'
            message="Hey Siri, show me what I've done."
          />
        )}
        {count >= 2 && (
          <>
            <BotMessage sender={botname} barColor={"#00b67A"}>
              <h2>Software Engineer</h2>
              <h3>Trustpilot ApS</h3>
              <p>
                Full ownership of business/marketing sites surrounding
                trustpilot.com.
              </p>
            </BotMessage>
            <BotMessage sender={botname} barColor={"black"}>
              <h2>Full Stack Engineer</h2>
              <h3>Feats ApS</h3>
              <p>
                Scoped out business and technical requirements. Recruited,
                managed, and trained a junior developer in the team. Took full
                ownership of the frontend, designed, built, and maintained
                several major features still in use today. See it on feats.co.
              </p>
            </BotMessage>
            <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
              <h2>Senior Software Engineer</h2>
              <h3>Quadric ApS</h3>
              <p>
                Started as an intern. Worked on the Quadric Index, which was a
                way to rank brand strength and identity. Pivoted to Feats ApS.
              </p>
            </BotMessage>
            <BotMessage sender={botname} barColor={"#F80102"}>
              <h2>Associate Consultant</h2>
              <h3>Oracle</h3>
            </BotMessage>
            <BotMessage sender={botname} barColor={"#00aeef"}>
              <h2>Software Engineer Intern</h2>
              <h3>Factset Research Systems</h3>
            </BotMessage>
          </>
        )}
      </MessageContainer>
    </Layout>
  );
};

export default Home;
