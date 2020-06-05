// Table data
export interface Table {
    name: string;
    status: string;
    restarts: string;
    age: string;
    clusterip: string;
    cpu: string;
    memory: string;
}


export interface ChartType {
    series?: any;
    chart?: any;
    dataLabels?: any;
    stroke?: any;
    fill?: any;
    xaxis?: any;
    colors?: any;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 