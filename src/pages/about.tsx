import type { NextPage } from "next";
import styled from "styled-components";

import RegularMessage from "components/messages/regular";
import Layout from "components/layout";
import useTimestamps from "hooks/useTimestamps";

const MessageContainer = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const sender = "carlopascual";

const Home: NextPage = () => {
  const { count, timestamps } = useTimestamps({ lastCount: 7 });

  return (
    <Layout title='about'>
      <MessageContainer>
        {count >= 1 && (
          <RegularMessage
            timestamp={timestamps[0]}
            sender={sender}
            message='HELLO! And welcome!! 👋'
          />
        )}
        {count >= 3 && (
          <RegularMessage
            timestamp={timestamps[3]}
            sender={sender}
            message={
              <p>
                {`I'm Carlo Pascual, a software engineer and a web developer.`}
              </p>
            }
          />
        )}
        {count >= 4 && (
          <RegularMessage
            timestamp={timestamps[4]}
            sender={sender}
            message='Currently based in Copenhagen, Denmark.'
          />
        )}
        {count >= 5 && (
          <RegularMessage
            timestamp={timestamps[5]}
            sender={sender}
            message='I like games and code.'
          />
        )}
      </MessageContainer>
    </Layout>
  );
};

export default Home;
