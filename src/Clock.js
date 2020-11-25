import { Typography } from "@material-ui/core";
import React from "react";

function Clock({ time, setTime }) {
  //   const [time, setTime] = React.useState("");

  //   React.useEffect(() => {
  //     let now = new Date().toLocaleTimeString();
  //     setTime(now);
  //   }, [time]);

  //   return <p>{time}</p>;

  // const [time, setTime] = React.useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
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
