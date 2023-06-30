import { useState } from 'react';

export default () => {
  const [err, setErr] = useState<any>(null);
  const [timer, setTimer] = useState<any>(null);

  const start = (cmd: any) => {
    const _timer = setInterval(() => {
      try {
        cmd();
      } catch (err) {
        setErr(err);
        stop();
      }
    }, 1000);

    setTimer(_timer);
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(0);
  };

  return {
    err,
    timer,
    start,
    stop,
  };
};
