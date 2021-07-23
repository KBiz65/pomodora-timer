import React from "react";

import SessionText from "./SessionText";
import ProgressBarDisplay from "./ProgressBarDisplay";

function SessionDisplay({ session, focusDuration, breakDuration }) {
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
