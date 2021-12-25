import styled from "styled-components";
import { CONTENT_COLOR } from "constants/colors";

import { Sender } from "./shared";
import React from "react";

type Message = {
  message: React.ReactNode;
  sender: string;
  timestamp?: Date;
};

const Content = styled.div`
  font-size: 16px;
  color: ${CONTENT_COLOR};

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const Timestamp = styled.span`
  display: inline;
  font-size: 11px;
  font-weight: 500;
  color: rgb(114, 118, 125);
`;

const makeTwoDigits = (num: string | number) => `${"0" + num}`.slice(-2);

const MessageOutline = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 16px;
`;

const MyMessage = ({ sender, message, timestamp }: Message) => (
  <MessageOutline>
    <div style={{ whiteSpace: "nowrap" }}>
      {timestamp && (
        <Timestamp>
          {`${makeTwoDigits(timestamp.getHours())}:${makeTwoDigits(
            timestamp.getMinutes()
          )}`}{" "}
        </Timestamp>
      )}
      <Sender style={{ marginLeft: "8px" }}>{sender}</Sender>
    </div>

    <Content>{message}</Content>
  </MessageOutline>
);

export default MyMessage;
