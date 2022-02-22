import { useState } from "react";


import Card from "../ui/Card";
import classes from "../meetups/NewMeetupForm.module.css";

function WelcomeForm() {
  const [authorName, setAuthorName] = useState("wewe");
  const [authorBio, setAuthorBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const authorInfo = { authorName, authorBio };

    console.log(authorInfo);
    console.log(authorName);
  };

  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label className={classes.label}>Please enter your name! ;)</label>
            <input
              type="text"
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <textarea
              placeholder="Here you can write something about yourself..."
              type="text"
              value={authorBio}
              onChange={(e) => setAuthorBio(e.target.value)}
            />
          </div>
          <div className={classes.mysubmit}>
            <button>SUBMIT</button>
            <p>
              <b>Test name:</b> {authorName}
            </p>
            <p>
              <b>Test bio:</b> {authorBio}
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default WelcomeForm;