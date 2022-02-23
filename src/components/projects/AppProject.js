import React from 'react'

const AppProject = ({ image, title, description, href }) => {
    return (
        <div className="bg-dark w-140 border-black border-2 rounded-2xl my-4 mx-8 shadow-2xl project">
            <a href={href} target="_blank" rel="noreferrer" className='flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start'>
                <img src={image} alt="" className="md:w-56 w-auto h-auto md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl bg-contain" />
                <div className='flex flex-col items-center'>
                    <p className="text-turquoise-dark font-extrabold my-3 mx-5 text-2xl">
                        {title}
                    </p>
                    <div className="my-3 mx-5">
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