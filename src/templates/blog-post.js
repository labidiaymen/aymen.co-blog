import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const {
    slug,
    title,
    frontmatter: { categories },
  } = post
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {/* <div
              class="bg-cover bg-center ..."
              style={{
                "background-image": "url(" + "/" + post.frontmatter.cover + ")",
                height : "180px",
                width:"A00%"
              }}
            ></div> */}
          <div className="flex flex-col md:flex-row">
            <div className=" items-center" style={{ alignSelf: "center" }}>
              <h1
                className="post-list-title single-post-list-title self-center"
                itemProp="headline"
              >
                {post.frontmatter.title}
              </h1>
            </div>
            <div className="basis-2/5 block self-center pl-0 md:pl-12">
              {post.frontmatter.cover && (
                <img
                  className="pr-3 md:float-right"
                  src={"/" + post.frontmatter.cover}
                  alt={post.frontmatter.title}
                ></img>
              )}
            </div>
          </div>
          
        </header>
        <section
          className="pt-0"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        {!categories?.includes("pages") && (
            <div className="py-1">
              Last modified: <small>{post.frontmatter.date}</small>
            </div>
          )}
          <DiscussionEmbed {...disqusConfig} />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        cover
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
