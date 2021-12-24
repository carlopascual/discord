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

const BORDER_WIDTH = 5;

const ChildrenContainer = styled.div<ChidlrenContainer>`
  font-size: 1rem;
  color: ${CONTENT_COLOR};
  background: ${BG_DARKER_COLOR};
  border-radius: 0 3px 3px 0;
  padding: 10px 10px;
  margin-left: 20px;
  position: relative;

  p {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.1rem;
  }

  &:before {
    content: "";
    top: 0;
    height: 100%;
    left: ${0 - BORDER_WIDTH}px;
    width: ${BORDER_WIDTH}px;
    background: ${({ barColor }) => barColor};
    position: absolute;
    border-radius: 3px 0 0 3px;
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
