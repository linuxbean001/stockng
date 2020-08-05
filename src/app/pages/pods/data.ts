import { ChartType } from './pods.model';

const tableData = [
  {
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  },{
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  },{
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  },{
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  },{
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  },{
    name: 'dash-demo',
    status: 'Running',
    restarts: '0',
    age: '2 days',
    clusterip: '10.148.0.3',
    cpu: '0.002',
    memory:'23.418 Mi',
  }
];



const OveviewChart: ChartType = {
    series: [{
        type: 'area',
        name: 'CPU',
        data: ['0.0008', '0.002', '0.002', '0.003', '0.003','0']
    }],
    chart: {
        height: 240,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1,
        dashArray: [0]
    },
    fill: {
        type: 'solid',
        opacity: [0.15],
    },
    xaxis: {
        categories: ['09.20', '09.23', '09.26', '09.30', '09.34'],
    },
    colors: ['#34c38f'],
};


const OveviewChartMemory: ChartType = {
    series: [{
        type: 'area',
        name: 'Memory',
        data: ['11.9 Mi', '23.8 Mi', '35.8 Mi', '47.7 Mi', '53.6 Mi','0']
    }],
    chart: {
        height: 240,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1,
        dashArray: [0]
    },
    fill: {
        type: 'solid',
        opacity: [0.15],
    },
    xaxis: {
        categories: ['09.20', '09.23', '09.26', '09.30', '09.34'],
    },
    colors: ['#556ee6'],
};


export { tableData,OveviewChart,OveviewChartMemory};
