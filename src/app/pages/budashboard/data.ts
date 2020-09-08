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
                    width: 10
                }
            },
            data: [{ value: 50, name: 'CPU' }]
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

const dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const data1 = [220, 182, 191, 234, 290, 330, 310];
const dataShadow = [];
const yMax = 500;

// tslint:disable-next-line: prefer-for-of
for (let i = 0; i < data1.length; i++) {
    dataShadow.push(yMax);
}
const gradientBarChart: ChartType = {
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 0
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: { color: 'rgba(0,0,0,0.05)' }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    )
                },
                emphasis: {
                    color: new graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ]
                    )
                }
            },
            data: data1
        }
    ]
};


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

export { gaugeChart,gaugeMemory,gaugeStorage,statData, gradientBarChart};
