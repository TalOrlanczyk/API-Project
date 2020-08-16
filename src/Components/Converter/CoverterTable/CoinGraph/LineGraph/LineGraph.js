import React, {useState,useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Chartjs from "chart.js";
import { ChartConfigByType } from '../../../../../functions/functions';

const LineGraph = ({data, options}) => {
    const chartContainer = useRef();
    const [chartInstance, setChartInstance] = useState();
    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            let ChartConfig = ChartConfigByType("line");
            ChartConfig.data = {...data}
            ChartConfig.options = {...options};
            const newChartInstance = new Chartjs(chartContainer.current, ChartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer,data,options]);
    return (
        
            <canvas height={250} width={550} ref={chartContainer} />
      
    )
}
LineGraph.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
};

export default LineGraph;