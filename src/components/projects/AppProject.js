import React from 'react'

const AppProject = ({ image, title, description, href }) => {
    return (
        <div className="bg-dark w-140 border-black border-2 rounded-2xl my-4 mx-8 shadow-2xl project">
            <a href={href} target="_blank" rel="noreferrer" className='flex'>
                <img src={image} alt="" className="w-56 max-h-96 rounded-l-2xl bg-contain" />
                <div className='flex flex-col items-center'>
                    <p className="text-turquoise-dark font-extrabold my-3 mx-5 text-2xl text-center">
                        {title}
                    </p>
                    <div className="text-left my-3 mx-5">
                        {description && description.map((line, i) => {
                            return (<p className="text-grayish-light" key={i}>{line}</p>)
                        })}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default AppProject