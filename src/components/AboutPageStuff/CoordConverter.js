import { useState } from "react";

import classes from "../meetups/NewMeetupForm.module.css";

function CoordinateConverter() {
  const [initialCoordinates, setInitialCoordinates] = useState();
  const [fillCoordinatesFirst, setFillCoordinatesFirst] = useState();

  var calculateCoordinates = ''

  if (initialCoordinates && fillCoordinatesFirst) {
    calculateCoordinates = (parseFloat(initialCoordinates) + parseFloat(fillCoordinatesFirst))
  } else {
    calculateCoordinates = 'The result will show here'
  }

  return (
    <div className={classes.control}>
      <div>
        <label>Initial coordinates:</label>
        <input
          type="text"
          value={initialCoordinates}
          onChange={(e) => setInitialCoordinates(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Fill coordinates:</label>
        <input
          type="text"
          value={fillCoordinatesFirst}
          onChange={(e) => setFillCoordinatesFirst(e.target.value)}
        ></input>
      </div>
      <div>
        <h1>{calculateCoordinates}</h1>
      </div>
    </div>
  );
}

export default CoordinateConverter;
