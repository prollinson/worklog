import React from "react"
import styles from "./work-log-entry.module.css"
import moment from "moment"

export default (props) => {
  const entry = props.entry;
  var date = moment(entry.date);
  return (
    <div>
      <h2 className={styles.heading}>{entry.title}</h2>
      <p className={styles.date}>{date.format("dddd, MMMM Do YYYY")}</p>
      <a className={styles.link} href={entry.link}>{entry.link}</a>
    </div>
  )
}
