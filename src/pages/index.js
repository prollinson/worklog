import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import WorkLogActivityFeed from "../components/work-log-activity-feed"

export default ({data}) => {
  const logsData = data.allLogsJson.edges.map((edge) => edge.node)
  return (
    <Layout>
      {data.site.siteMetadata.description}
      <WorkLogActivityFeed logEntries={logsData}/>
    </Layout>
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
          date
          title
          summary
          link
          tags
        }
      }
    }
  }
`
