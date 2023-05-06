import { useEffect, useRef, useState } from "react";

export const TimerInterval = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [started, setStarted] = useState(false);
  const timerId = useRef<NodeJS.Timer | null>(null);

  const onStart = () => {
    setStarted(true);
  };

  const onStop = () => {
    setStarted(false);
  };

  const onReset = () => {
    setSeconds(0);
    setStarted(false);
  };

  useEffect(() => {
    if (started) {
      timerId.current = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else {
      if (timerId.current) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
    }
    return () => {
      timerId.current && clearInterval(timerId.current);
    };
  }, [started, seconds]);

  return (
    <div>
      <p>SetInterval</p>
      <p>Seconds: {`${seconds}`.padStart(2, "0")}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export const TimerTimeout = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [started, setStarted] = useState(false);

  const onStart = () => {
    setStarted(true);
  };

  const onStop = () => {
    setStarted(false);
  };

  const onReset = () => {
    setSeconds(0);
    setStarted(false);
  };

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
  }, [started, seconds]);

  return (
    <div>
      <p>SetTimeout</p>
      <p>Seconds: {`${seconds}`.padStart(2, "0")}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
