import React from 'react';
import SortButton from './SortButton';

const Sorting = ({ sorts, setSorts }) => {

    const changeSorts = (type) => {
        const newSorts = sorts.map(sort => {
            return {...sort, selected: !sort.selected}
        });

        if (!sorts.filter(sort => sort.title === type)[0].selected) {
            setSorts(newSorts);
        }
    }

    return (
        <div className='flex sorts'>
            {sorts.map((sort, i) => <SortButton sort={sort} onChangeSort={changeSorts} key={i} />)}
        </div>
    )
}

export default Sorting