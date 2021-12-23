import styled from "styled-components";
import { CONTENT_COLOR } from "constants/colors";

import { Sender } from "./shared";

type Message = {
  message: string;
  sender: string;
};

const Content = styled.p`
  display: inline;
  font-size: 1rem;
  color: ${CONTENT_COLOR};
`;

const MyMessage = ({ sender, message }: Message) => (
  <div>
    <Sender style={{ marginRight: "10px" }}>{sender}</Sender>
    <Content>{message}</Content>
  </div>
);

export default MyMessage;
