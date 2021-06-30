import React from 'react'

const BlogItem = ({title, createdAt, children}) => {
    return (
        <article className="blog-item">
            <h1 className="blog-title">{title} - {createdAt}</h1>
            <p className="blog-content">{children}</p>
        </article>
    )
}

export default BlogItem
