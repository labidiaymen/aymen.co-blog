import React from "react"
import { Link } from "gatsby"

const ArticleListItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const category =
    post.frontmatter?.categories && post.frontmatter?.categories[0]
      ? post.frontmatter?.categories[0]
      : "pages"
  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header></header>
      <section>
        <div className="flex flex-row">
          <div style={{ paddingRight: "4%" }}>
            <h2>
              <Link
                to={"/" + category + post.fields.slug}
                itemProp="url"
                className="post-list-title"
              >
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p
              className="post-list-description"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </div>
          <div className="basis-2/5">
            <img
              style={{ width: "100%", display: "inline-block" }}
              src={"/" + post.frontmatter.cover}
              alt={post.frontmatter.title}
            ></img>
          </div>
        </div>
      </section>

      {/* <Link className="post-list-more" to={post.fields.slug}>
        <span>read more</span>
      </Link> */}
    </article>
  )
}

export default ArticleListItem
