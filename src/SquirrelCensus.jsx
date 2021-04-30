import React from "react";
import ReactECharts from "echarts-for-react";
import Papaparse from "papaparse";

const fetchSquirrelColors = () => {
  let surprise = Papaparse.parse("nyc_squirrels.csv", {
    download: true,
    complete: (results) => {
      let colors = results.data.map((color) => {
        return color[9];
      });
      let noRepeat = [...new Set(colors)];
      console.log(noRepeat);
    },
  });
  console.log("Papaparse",surprise);
};

const SquirrelCensus = () => {
  fetchSquirrelColors();
  const options = {
    title: {
      text: "This is a nice bar graph",
      textStyle: {
        fontSize: 15,
      },
    },
    // grid: { top: 20, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "I appear when you move the cursor",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
