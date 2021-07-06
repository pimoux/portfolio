import React from 'react'

const BlogItem = ({title, createdAt, children}) => {
    return (
        <article className="flex flex-col pl-4 border-turquoise border-2 bg-dark rounded-3xl my-8 w-11/12 md:w-4/6">
            <h1 className="text-turquoise underline text-3xl mb-8 mt-4">{title} - {createdAt}</h1>
            <p className="text-grayish-light">{children}</p>
        </article>
    )
}

export default BlogItem
