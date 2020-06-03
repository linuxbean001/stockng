import { ChartType } from './nodedetails.model';

const basicRadialBarChart: ChartType = {
    chart: {
        height: 220,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Requests',
                    formatter: (w) => {
                        // tslint:disable-next-line: max-line-length
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return '64%';
                    }
                }
            }
        }
    },
    colors: ['#34c38f','#556ee6'],
    series: [64, 52],
    labels: ['Requests', 'Limits'],
};

const basicRadialBarChartMemory: ChartType = {
    chart: {
        height: 220,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Requests',
                    formatter: (w) => {
                        // tslint:disable-next-line: max-line-length
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return '10.26%';
                    }
                }
            }
        }
    },
    colors: ['#34c38f','#556ee6'],
    series: [10.26, 18.62],
    labels: ['Requests', 'Limits'],
};

const basicRadialBarChartPods: ChartType = {
    chart: {
        height: 220,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Allocation',
                    formatter: (w) => {
                        // tslint:disable-next-line: max-line-length
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return '26.38%';
                    }
                }
            }
        }
    },
    colors: ['#34c38f'],
    series: [26.38],
    labels: ['Allocation'],
};

export {basicRadialBarChart,basicRadialBarChartMemory,basicRadialBarChartPods};
