import React from 'react'

const ContactItem = ({children, title}) => {
    return (
        <div className="px-8 py-4 bg-dark text-turquoise border-2 w-72 border-turquoise flex items-center rounded-lg text-3xl hover:text-turquoise-dark hover:border-turquoise-dark">
            {children}
            <p>{title}</p>
        </div>
    )
}

export default ContactItem
