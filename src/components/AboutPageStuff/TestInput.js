import { useState } from "react";

import classes from "../meetups/NewMeetupForm.module.css";

function TestInput() {
  const [originalInput, newInput] = useState("");

  console.log(originalInput);

  let originalInputReplace = originalInput.replaceAll("-", " ");
  console.log(originalInputReplace);

  return (
    <div className={classes.control}>
      <h1>Replace -'s</h1>
      <input
        type="text"
        value={originalInput}
        onChange={(e) => newInput(e.target.value)}
      ></input>
      <h2>{originalInputReplace}</h2>
    </div>
  );
}

/*let originalInputReplace = originalInput.replace("-", " ");
  console.log(originalInputReplace);
*/
export default TestInput;
