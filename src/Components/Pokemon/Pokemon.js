import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../Containers/Pagination/Pagination';
const Pokemon = (props) => {
    const [currentPage,setCurrentPage] = useState(1);
    return (
        <Pagination
            pageLimit={10}
            pageNeighbours={4}
            totalRecords={429}
            CurrentPage={currentPage}
            onPageChanged={(newPage)=>setCurrentPage(newPage)}/>
    )
}
Pokemon.propTypes = {
};

export default Pokemon;