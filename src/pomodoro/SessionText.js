import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration/index";

function SessionText({ session, focusDuration, breakDuration }) {
  return (
    <div className="row mb-2">
      <div className="col">
        {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
          {session?.label} for{" "}
          {session.label === "Focusing"
            ? minutesToDuration(focusDuration)
            : minutesToDuration(breakDuration)}
        </h2>
        {/* TODO: Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
          {session ? secondsToDuration(session.timeRemaining) : null} remaining
        </p>
      </div>
    </div>
  );
}

export default SessionText;
