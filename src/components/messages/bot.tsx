import styled from "styled-components";
import { BG_DARKER_COLOR, CONTENT_COLOR, DISC_COLOR } from "constants/colors";

import { Sender } from "./shared";

type BotMessage = {
  sender: string;
  children: React.ReactNode;
  barColor: string;
};

const Outline = styled.div``;

interface ChidlrenContainer {
  barColor: string;
}

const ChildrenContainer = styled.div<ChidlrenContainer>`
  font-size: 1rem;
  color: ${CONTENT_COLOR};
  background: ${BG_DARKER_COLOR};
  border-radius: 3px;
  padding: 10px 10px;
  margin-left: 20px;
  border-left: 5px solid ${({ barColor }) => barColor};

  p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.1rem;
  }
`;

const BotIcon = styled.span`
  background: ${DISC_COLOR};
  text-transform: uppercase;
  color: white;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 0.5rem;
  height: fit-content;
  font-weight: bold;
`;

const BotMessage = ({ sender, children, barColor }: BotMessage) => (
  <Outline>
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <BotIcon>✔ Bot</BotIcon>
      <Sender>{sender}</Sender>
    </div>
    <ChildrenContainer barColor={barColor} style={{ marginTop: "5px" }}>
      {children}
    </ChildrenContainer>
  </Outline>
);

export default BotMessage;
