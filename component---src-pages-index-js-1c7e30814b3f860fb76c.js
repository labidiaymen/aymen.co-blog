"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{515:function(e,t,l){var a=l(7294),r=l(1597),n=l(9230);t.Z=function(e){var t,l,o,s=e.post,i=s.frontmatter.title||s.fields.slug,c=s.frontmatter.cover,m=null!==(t=s.frontmatter)&&void 0!==t&&t.categories&&null!==(l=s.frontmatter)&&void 0!==l&&l.categories[0]?null===(o=s.frontmatter)||void 0===o?void 0:o.categories[0]:"pages";return a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null),a.createElement("section",null,a.createElement("div",{className:"flex flex-col md:flex-row"},a.createElement("div",{className:"self-center"},a.createElement("h2",null,a.createElement(r.Link,{to:"/"+m+s.fields.slug,itemProp:"url",className:"post-list-title"},a.createElement("span",{itemProp:"headline"},i))),a.createElement("p",{className:"post-list-description",dangerouslySetInnerHTML:{__html:s.frontmatter.description||s.excerpt},itemProp:"description"})),a.createElement("div",{className:"basis-3/5 block p-1 mt-2 md:p-8 md:mt-0"},a.createElement(n.G,{image:(0,n.c)(c),alt:s.frontmatter.title})))))}},6558:function(e,t,l){l.r(t);var a=l(7294),r=l(8568),n=l(262),o=l(515);t.default=function(e){var t,l=e.data,s=e.location,i=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=l.allMarkdownRemark.nodes;return 0===c.length?a.createElement(r.Z,{location:s,title:i},a.createElement(n.Z,{title:"All posts"}),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(r.Z,{location:s,title:i},a.createElement(n.Z,{title:"All posts"}),a.createElement("ol",{style:{listStyle:"none"}},c.map((function(e){return a.createElement("li",{key:e.fields.slug},a.createElement(o.Z,{post:e}))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1c7e30814b3f860fb76c.js.map