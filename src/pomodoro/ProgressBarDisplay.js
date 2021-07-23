import React from "react";

function ProgressBarDisplay({ session, focusDuration, breakDuration }) {
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
  );
}

export default ProgressBarDisplay;
