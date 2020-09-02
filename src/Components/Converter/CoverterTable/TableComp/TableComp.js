import React, { useState, useMemo,useCallback } from 'react';
import './TableComp.css';
import CoinGraph from '../CoinGraph/CoinGraph';
import TableBody from './TableBody/TableBody';
import Table from '../../../../Containers/Table/Table';

const TableComp = ({ CurreciesRates }) => {
    const [graphData, setGraphData] = useState({
        openGraph: false,
        pickedData: ""
    })
    const PickDataToGraph = useCallback((e, option) => {
        setGraphData({ ...graphData, pickedData: option, openGraph: true })
    },[graphData]);
    const tableMemo = useMemo(() => {
        return (
            <div className="table">
                <Table>
                    <Table.Header headers={["type", "rate", "daily change", "graph"]} />
                    <Table.Body>
                    <TableBody
                        pickedBase={CurreciesRates.pickedBase}
                        latestRate={CurreciesRates.latestRate}
                        yesterdayRate={CurreciesRates.yesterdayRate}
                        PickDataToGraph={(e, option) => PickDataToGraph(e, option)} />
                    </Table.Body>
                </Table>
            </div>
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CurreciesRates.latestRate, CurreciesRates.pickedBase, CurreciesRates.yesterdayRate]);
    return (
        <>
            {tableMemo}
            {
                graphData.openGraph ?
                    <CoinGraph
                        latestDate={CurreciesRates.latestDate}
                        pickData={graphData.pickedData}
                        closeGraph={(e) => setGraphData({ ...graphData, openGraph: false,pickedData: "" })} />
                    : null
            }
        </>
    )
}
export default TableComp;