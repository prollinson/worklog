import React from "react"

export default (props) => {
  const entry = props.entry;
  console.log(entry);
  return (
    <div>
      <h2>{entry.title}</h2>
      <a href="{entry.link}">{entry.link}</a>
    </div>
  )
}
