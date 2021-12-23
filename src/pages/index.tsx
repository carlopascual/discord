import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import BotMessage from "components/messages/bot";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const Home: NextPage = () => {
  return (
    <MessageContainer>
      <RegularMessage
        sender={"carlopascual"}
        message={"HELLOW AND WELCOME!!!"}
      />
      <RegularMessage
        sender={"darrenveezy"}
        message={".play telephone number"}
      />
      <RegularMessage sender={"darrenveezy"} message={".play industry baby"} />
      <RegularMessage
        sender={"darrenveezy"}
        message={".play ギャラクティックにさせて"}
      />
      <RegularMessage sender={"darrenveezy"} message={"hello"} />
      <RegularMessage sender={"darrenveezy"} message={"hello"} />
      <BotMessage sender={"darrenveezy"} barColor={"green"}>
        <p>
          No songs found. Try to be as specific as possible by only including
          song title and artist name!
        </p>
      </BotMessage>
    </MessageContainer>
  );
};

export default Home;
