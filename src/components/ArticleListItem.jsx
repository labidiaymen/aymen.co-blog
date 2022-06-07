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
        <div className="flex flex-col md:flex-row">
          <div className="self-center">
            <h2>
              <Link
                to={"/" + category + post.fields.slug}
                itemProp="url"
                className="post-list-title"
              >
                <span itemProp="headline">{title}</span>
              </Link>
            </h2>
            {/* <small>{post.frontmatter.date}</small> */}
            <p
              className="post-list-description"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </div>
          <div className="basis-3/5 block p-1 mt-2 md:p-8 md:mt-0">
            <img
              className="pr-3 p-2"
              src={"/" + post.frontmatter.cover}
              alt={post.frontmatter.title}
            ></img>
          </div>
        </div>
      </section>
    </article>
  )
}

export default ArticleListItem
