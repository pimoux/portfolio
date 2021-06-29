import React from 'react'

const ContactItem = ({children, title}) => {
    return (
        <div className="contact-item">
            {children}
            <p>{title}</p>
        </div>
    )
}

export default ContactItem
