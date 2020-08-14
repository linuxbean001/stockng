
import { ChartType } from './cluster.model';


const simpleLineChart: ChartType = {
    data: {
       // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    },
    type: 'Line',
    options: {
        height: 130,
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    }
};


const simplePieChart: ChartType = {
    data: {
        series: [5, 3, 4]
    },
    options: {
        height: 300,
        showLabel: false
    },
    type: 'Pie'
};

const pieChart: ChartType = {
    labels: [
        'Desktops', 'Tablets'
    ],
    datasets: [
        {
            data: [200, 100],
            backgroundColor: ['#34c38f', '#ebeff2'],
            hoverBackgroundColor: ['#34c38f', '#ebeff2'],
            hoverBorderColor: '#fff',
        }
    ],
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        }
    }
};

export {
    simpleLineChart,simplePieChart,pieChart
};
