import type { NextPage } from "next";
import MyMessage from "components/message";

const Home: NextPage = () => {
  return (
    <>
      <MyMessage
        sender={"darrenveezy"}
        message={".play friends and strangers"}
      />
      <MyMessage sender={"darrenveezy"} message={".play telephone number"} />
      <MyMessage sender={"darrenveezy"} message={".play industry baby"} />
      <MyMessage
        sender={"darrenveezy"}
        message={".play ギャラクティックにさせて"}
      />
      <MyMessage sender={"darrenveezy"} message={"hello"} />
      <MyMessage sender={"darrenveezy"} message={"hello"} />
    </>
  );
};

export default Home;
