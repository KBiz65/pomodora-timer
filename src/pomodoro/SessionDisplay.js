import React, { useState } from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration/index";

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
      console.log("AriaNow: ", ariaNow);
      console.log("AriaWidth: ", ariaWidth);
    }
  }

  return (
    session && (
      <>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
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
              {session ? secondsToDuration(session.timeRemaining) : null}{" "}
              remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaNow} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaWidth}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default SessionDisplay;
