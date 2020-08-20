import React, { useState, useMemo } from 'react';
import './TableComp.css';
import CoinGraph from '../CoinGraph/CoinGraph';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const TableComp = ({ CurreciesRates }) => {
    const [graphData, setGraphData] = useState({
        openGraph: false,
        pickedData: ""
    })
    const PickDataToGraph = (e, option) => {
        setGraphData({ ...graphData, pickedData: option, openGraph: true })
    }
    const tableMemo = useMemo(() => {
        return (
            <div className="table">
                <table className="tableCovertor">
                    <TableHeader headers={["type", "rate", "daily change", "graph"]} />
                    <TableBody
                        pickedBase={CurreciesRates.pickedBase}
                        latestRate={CurreciesRates.latestRate}
                        yesterdayRate={CurreciesRates.yesterdayRate}
                        PickDataToGraph={(e, option) => PickDataToGraph(e, option)} />
                </table>
            </div>
        )
    }, [CurreciesRates.latestRate, CurreciesRates.yesterdayRate]);
    return (
        <>
            {tableMemo}
            {
                graphData.openGraph ?
                    <CoinGraph
                        latestDate={CurreciesRates.latestDate}
                        pickData={graphData.pickedData}
                        closeGraph={(e) => setGraphData({ ...graphData, openGraph: false })} />
                    : null
            }
        </>
    )
}
export default TableComp;