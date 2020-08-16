import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../Containers/Pagination/Pagination';
import { PokemonsSearchInitial, PokemonsSearchJumpToPage, PokemonForm } from '../../API/GET/pokemon';
import LoadingComp from '../LoadingComp/LoadingComp';
import usePrevious from '../customHooks/usePrevious';

const Pokemon = (props) => {

    const [PagentionsData, setPagentuinData] = useState({
        pageLimit: 10,
        pageNeighbours: 4,
        totalRecords: 0,
        currentPage: 1
    });
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState([]);
    const prevCount = usePrevious(PagentionsData.currentPage);
    useEffect(() => {
        setIsLoading(true)

        PokemonsSearchJumpToPage(PagentionsData.pageLimit, (PagentionsData.currentPage * PagentionsData.pageLimit) - 10)
            .then(pokemons => {
                console.table(pokemons);
                pokemons.results.forEach((pokemon, index) => {
                    let splitsUrl = pokemon.url.split('/');
                    splitsUrl.pop();
                    PokemonForm(splitsUrl[splitsUrl.length - 1])
                        .then(form => {

                            pokemon.url = form.sprites.front_default;
                            if (pokemons.results.length - 1 === index) {
                                if (PagentionsData.totalRecords === 0) {
                                    setPagentuinData({ ...PagentionsData, totalRecords: pokemons.count });
                                }
                                setResult(pokemons.results);
                                setIsLoading(false);
                            }
                        })

                })

            });

    }, [PagentionsData.currentPage]);
    return (
        <div>
            <div>

                {
                    !isLoading ?
                        result.map((pokemon, index) => (
                            <img src={pokemon.url} />
                        )) : <LoadingComp />
                }
            </div>
            {
                PagentionsData.totalRecords !== 0 ?
                    <Pagination
                        pageLimit={PagentionsData.pageLimit}
                        pageNeighbours={PagentionsData.pageNeighbours}
                        totalRecords={PagentionsData.totalRecords}
                        CurrentPage={PagentionsData.currentPage}
                        onPageChanged={(newPage) => setPagentuinData({ ...PagentionsData, currentPage: newPage })} /> : null
            }
        </div>
    )
}
Pokemon.propTypes = {
};

export default Pokemon;