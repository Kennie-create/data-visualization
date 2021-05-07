import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Papaparse from "papaparse";

const fetchSquirrelColors = (setColorsData) => {
  Papaparse.parse("nyc_squirrels.csv", {
    download: true,
    complete: (results) => {
      let countObject = {};
      results.data.forEach((row) => {
        let currentSquirrelColor = row[8];
        if (countObject[currentSquirrelColor] === undefined) {
          countObject[currentSquirrelColor] = 1;
        } else {
          countObject[currentSquirrelColor]++;
        }
      });
      let countArray = Object.entries(countObject);
      console.log(countArray);
      setColorsData(countArray);
    },
  });
};

const SquirrelCensus = () => {
  const [colorsData, setColorsData] = useState([]);

  useEffect(() => {
    fetchSquirrelColors(setColorsData);
  }, []);
  const options = {
    title: {
      text: "This is a nice bar graph",
      textStyle: {
        fontSize: 15,
      },
    },
    // grid: { top: 20, right: 8, bottom: 24, left: 36 },
    dataset: {
      source: colorsData,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "I appear when you move the cursor",
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} />;
};

export default SquirrelCensus;
