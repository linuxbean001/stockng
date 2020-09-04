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
                    width: 17
                }
            },
            data: [{ value: 50, name: 'Completion rate' }]
        }
    ]
}

const gaugeMemory: ChartType = {
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
            name: 'Memory',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                    width: 17
                }
            },
            data: [{ value: 40, name: 'Completion rate' }]
        }
    ]
}


const gaugeStorage: ChartType = {
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
            name: 'Srorage',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                    width: 17
                }
            },
            data: [{ value: 30, name: 'Completion rate' }]
        }
    ]
}


const statData = [{
    icon: 'bx bx-copy-alt',
    title: 'CPU in GHz',
    value: '1235'
}, {
    icon: 'bx bx-archive-in',
    title: 'Memory GB',
    value: '3522'
}, {
    icon: 'bx bx-purchase-tag-alt',
    title: 'Storage in TB',
    value: '16'
}];

export { gaugeChart,gaugeMemory,gaugeStorage,statData};
