import type { NextPage } from "next";
import styled from "styled-components";

import BotMessage from "components/messages/bot";
import RegularMessage from "components/messages/regular";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const botname = "Siri Bot 🤖";

const Home: NextPage = () => {
  return (
    <Layout title="experience">
      <MessageContainer>
        <RegularMessage
          sender="carlopascual"
          message="Hey Siri, get job experience."
        />
        <BotMessage sender={botname} barColor={"#00b67A"}>
          <h2>Software Engineer</h2>
          <h3>Trustpilot ApS</h3>
          <p>
            Full ownership of business/marketing sites surrounding
            trustpilot.com.
          </p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(102, 102, 255)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <RegularMessage
          sender="carlopascual"
          message="Hey Siri, get job experience."
        />
        <BotMessage sender={botname} barColor={"#00b67A"}>
          <h2>Software Engineer</h2>
          <h3>Trustpilot ApS</h3>
          <p>
            Full ownership of business/marketing sites surrounding
            trustpilot.com.
          </p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(102, 102, 255)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <RegularMessage
          sender="carlopascual"
          message="Hey Siri, get job experience."
        />
        <BotMessage sender={botname} barColor={"#00b67A"}>
          <h2>Software Engineer</h2>
          <h3>Trustpilot ApS</h3>
          <p>
            Full ownership of business/marketing sites surrounding
            trustpilot.com.
          </p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(102, 102, 255)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <RegularMessage
          sender="carlopascual"
          message="Hey Siri, get job experience."
        />
        <BotMessage sender={botname} barColor={"#00b67A"}>
          <h2>Software Engineer</h2>
          <h3>Trustpilot ApS</h3>
          <p>
            Full ownership of business/marketing sites surrounding
            trustpilot.com.
          </p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(102, 102, 255)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <RegularMessage
          sender="carlopascual"
          message="Hey Siri, get job experience."
        />
        <BotMessage sender={botname} barColor={"#00b67A"}>
          <h2>Software Engineer</h2>
          <h3>Trustpilot ApS</h3>
          <p>
            Full ownership of business/marketing sites surrounding
            trustpilot.com.
          </p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(242, 125, 0)"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"black"}>
          <p>This is the github page.</p>
        </BotMessage>
        <BotMessage sender={botname} barColor={"rgb(102, 102, 255)"}>
          <p>This is the github page.</p>
        </BotMessage>
      </MessageContainer>
    </Layout>
  );
};

export default Home;
