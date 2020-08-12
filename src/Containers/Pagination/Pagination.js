import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
const UNREVEAL_PAGE = '...'
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
}
const Pagination = ({ totalRecords, pageLimit, pageNeighbours, onPageChanged,CurrentPage }) => {
    const TotalPages = Math.ceil(totalRecords / pageLimit);
    const endPage = Math.min(TotalPages - 1, CurrentPage + pageNeighbours);
    const gotoPage = (e,page) => {
        e.preventDefault();
        onPageChanged(page)
    }


    const fetchPageNumbers = () => {
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
        if (TotalPages > totalBlocks) {
            const startPage = Math.max(2, CurrentPage - pageNeighbours);
            // const endPage = Math.min(TotalPages - 1, CurrentPage + pageNeighbours);
            let pages = range(startPage, endPage);
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (TotalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [UNREVEAL_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, UNREVEAL_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [UNREVEAL_PAGE, ...pages,UNREVEAL_PAGE];
                    break;
                }
            }

            return [1, ...pages, TotalPages];

        }

        return range(1, TotalPages);
    }
    return (
        <Fragment>
            <nav aria-label="Countries Pagination">
                <ul className="pagination">
                    {fetchPageNumbers()
                        .map((page, index) => {

                            if (page === UNREVEAL_PAGE) return (
                                <li key={index} className="page-item">
                                    <a className="page-link" href="#" aria-label="Unrevel" onClick={(e)=>gotoPage(e,endPage + 1)}>
                                        <span className="sr-only">...</span>
                                    </a>
                                </li>
                            );

                            return (
                                <li key={index} className={`page-item${CurrentPage === page ? ' active' : ''}`}>
                                    <a className="page-link" href="#" onClick={(e)=>gotoPage(e,page)}>{page}</a>
                                </li>
                            );

                        })}

                </ul>
            </nav>
        </Fragment>
    )
}
Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};
export default Pagination;