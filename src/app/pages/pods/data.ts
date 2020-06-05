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
        name: 'BTC',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
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
        width: 2,
        dashArray: [0, 0, 3]
    },
    fill: {
        type: 'solid',
        opacity: [0.15, 0.05, 1],
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    colors: ['#f1b44c'],
};

export { tableData,OveviewChart };
