import styled from "styled-components";
import { SENDER_COLOR, CONTENT_COLOR } from "constants/colors";

type Message = {
  message: string;
  sender: string;
};

const Outline = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Sender = styled.h5`
  display: inline;
  font-size: 1rem;
  font-weight: bold;
  color: ${SENDER_COLOR};
`;

const Content = styled.p`
  display: inline;
  font-size: 1rem;
  color: ${CONTENT_COLOR};
`;

const MyMessage = ({ sender, message }: Message) => (
  <Outline>
    <Sender style={{ marginRight: "20px" }}>{sender}</Sender>
    <Content>{message}</Content>
  </Outline>
);

export default MyMessage;
