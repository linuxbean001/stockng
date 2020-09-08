import { ApexChartType } from './apex.model';

const columnlabelChart: ApexChartType = {
    chart: {
        height: 260,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    colors: ['#556ee6'],
    plotOptions: {
        bar: {
            columnWidth: '30%',
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Inflation',
        data: [1.5, 2.2, 3.0, 4.1, 3.2, 2.8, 1]
    }],
    xaxis: {
        labels: {
            offsetY: -45,
            show: false,
        },
        categories: [],
        title: {
            text: 'Memory',
        }
    },
    fill: {
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        },
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: (val) => {
                return val + '%';
            }
        }
    },
};
const monthlyEarningChart: ApexChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    fontWeight: 600,
                    color: undefined,
                    offsetY: 65
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#556ee6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [50],
    labels: ['CPU'],
};


export {
    columnlabelChart, monthlyEarningChart
};
