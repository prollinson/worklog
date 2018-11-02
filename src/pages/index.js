import React from "react"
import { graphql } from 'gatsby'
import WorkLogActivityFeed from "../components/work-log-activity-feed"

export default ({data}) => {
  const logsData = data.allLogsJson.edges.map((edge) => edge.node)
  return (
    <div>
      {data.site.siteMetadata.description}
      <WorkLogActivityFeed logEntries={logsData}/>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
    allLogsJson {
      edges {
        node {
          id
          title
          summary
          link
        }
      }
    }
  }
`
