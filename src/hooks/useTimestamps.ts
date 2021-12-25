import useInterval from "use-interval";
import { useState } from "react";

const useTimestamps = ({ lastCount }: { lastCount: number }) => {
  const [count, setCount] = useState(0);

  let timestampsDefault: Array<Date> = [new Date()];
  const [timestamps, setTimeStamps] = useState(timestampsDefault);

  useInterval(
    () => {
      setTimeStamps([...timestamps, new Date()]);
      setCount(count + 1);
    },
    count <= lastCount ? 1000 : null
  );

  return {
    count,
    timestamps,
  };
};

export default useTimestamps;
