import { ChartType } from './echart.model';
import { graphic } from 'echarts';

const gaugeChart: ChartType = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    //toolbox: {
       // feature: {
           // restore: { title: "Refresh" },
            //saveAsImage: { title: "Download Image" }
       //}
    //},
    series: [
        {
            name: 'CPU',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                    width: 20
                }
            },
            data: [{ value: 50, name: 'Completion rate' }]
        }
    ]
}

export { gaugeChart};
