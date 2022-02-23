import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SortButton = ({ sort, onChangeSort }) => {

    return (
        <div className={
            !sort.selected ? "mx-4 mt-4 p-4 border border-4 border-transparent text-turquoise bg-black rounded-2xl opacity-30 cursor-pointer" :
                "mx-4 mt-4 p-4 border border-4 text-turquoise bg-black rounded-2xl border-turquoise"
        }
            onClick={() => onChangeSort(sort.title)}
        >
            {sort.title} &nbsp;
            <FontAwesomeIcon icon={sort.icon} />
        </div>
    )
}

export default SortButton;