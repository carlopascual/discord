import type { NextPage } from "next";
import styled from "styled-components";
import useInterval from "use-interval";
import { useState } from "react";

import RegularMessage from "components/messages/regular";
import Layout from "components/layout";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const sender = "carlopascual";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      setCount(count + 1);
    },
    count <= 7 ? 1000 : null
  );

  return (
    <Layout title="about">
      <MessageContainer>
        {count >= 1 && (
          <RegularMessage sender={sender} message={"HELLO! And welcome!! 👋"} />
        )}
        {count >= 3 && (
          <RegularMessage
            sender={sender}
            message={
              "I'm Carlo Pascual, a software engineer and a web developer."
            }
          />
        )}
        {count >= 4 && (
          <RegularMessage
            sender={sender}
            message={"Currently based in Copenhagen, Denmark."}
          />
        )}
        {count >= 5 && (
          <RegularMessage sender={sender} message={"I like games and code."} />
        )}
      </MessageContainer>
    </Layout>
  );
};

export default Home;
