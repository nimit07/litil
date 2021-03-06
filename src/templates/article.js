import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Layout from "../components/Layout"

export const query = graphql`
query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
        strapiId
        title
        content
        updated_at
        image {
            publicURL
        }
    }
}
`
const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>
        <div className="uk-section">
          <div className="uk-contianer uk-container-small">
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article