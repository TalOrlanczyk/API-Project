import React, { useState } from 'react';
import './TableComp.css';
import CoinGraph from '../CoinGraph/CoinGraph';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const TableComp = ({ latestRate, yesterdayRate,latestDate }) => {
    const [openGraph, setOpenGraph] = useState(false);
    const [pickData, setPickData] = useState("");
    const PickDataToGraph = (e, option) => {
        setPickData(option);
        setOpenGraph(true);
    }
    return (
        <>
            <div className="table">
                <table className="tableCovertor">
                    <TableHeader headers={["type","rate","daily change","graph"]}/>
                    <TableBody 
                        latestRate={latestRate} 
                        yesterdayRate={yesterdayRate}  
                        PickDataToGraph={(e,option) => PickDataToGraph(e,option)}/>
                </table>
            </div>
            {
                openGraph ?
                    <CoinGraph
                        latestDate={latestDate}
                        pickData={pickData}
                        closeGraph={(e) => setOpenGraph(false)} />
                    : null
            }
        </>
    )
}
export default TableComp;