import React from 'react';
import ReactECharts from 'echarts-for-react';

const SquirrelCensus = () => {
    const options = {
        title : {
          text: 'This is a nice bar graph',
          textStyle: {
            fontSize: 15
          }
        },
        // grid: { top: 20, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'I appear when you move the cursor',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar',
            smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
      return <ReactECharts option={options} />;
    };
    

export default SquirrelCensus;

