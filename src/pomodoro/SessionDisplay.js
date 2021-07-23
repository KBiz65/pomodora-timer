import React from "react";

import SessionText from "./SessionText";
import ProgressBarDisplay from "./ProgressBarDisplay";

function SessionDisplay({ session, focusDuration, breakDuration }) {
  let ariaNow = 100;
  let ariaWidth = 0;
  if (session) {
    if (session.label === "Focusing") {
      ariaNow = session.timeRemaining / (focusDuration * 60);
      ariaWidth = (1 - ariaNow) * 100;
    } else {
      ariaNow = session.timeRemaining / (breakDuration * 60);
      ariaWidth = (1 - ariaNow) * 100;
    }
  }

  return (
    session && (
      <>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <SessionText
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
        <ProgressBarDisplay
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
      </>
    )
  );
}

export default SessionDisplay;
