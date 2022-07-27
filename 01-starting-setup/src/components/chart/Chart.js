import ChartBar from "./chart-bar/ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValuesArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  let maxValue = Math.max(...dataPointValuesArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
