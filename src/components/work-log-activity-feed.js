import React from "react"
import WorkLogEntry from "../components/work-log-entry"

export default (props) => {
  const logEntries = props.logEntries;
  const listItems = logEntries.map((entry, i) =>
    <WorkLogEntry key={i} entry={entry} />
  );

  return (
    <div>
      <h2>Activity Feed</h2>
      {listItems}
    </div>
  )
}
