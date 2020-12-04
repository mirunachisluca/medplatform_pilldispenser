import { Typography } from "@material-ui/core";
import React from "react";

function Clock({ time, setTime }) {
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return <Typography variant="h2">{time.toLocaleTimeString()}</Typography>;
}

export { Clock };
