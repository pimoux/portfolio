import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SkillIcon = ({icon}) => {
    return (
        <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={icon.icon} className={icon.className}/>
            <div className="flex">
                {new Array(5).fill(faStar).map((star, i) => {
                    return i < icon.rate ? 
                    <FontAwesomeIcon icon={star} className="text-yellow-300 mx-1" key={i}/> :
                    <FontAwesomeIcon icon={star} className="mx-1" key={i}/>
                })}
            </div>
            <div className="flex mt-2">
                {new Array(5).fill(faStar).map((star, i) => {
                    return i + 5 < icon.rate ? 
                    <FontAwesomeIcon icon={star} className="text-yellow-300 mx-1" key={i}/> :
                    <FontAwesomeIcon icon={star} className="mx-1" key={i}/>
                })}
            </div>
        </div>
    )
}

export default SkillIcon
