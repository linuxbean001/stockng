// Table data
export interface Table {
    pod: string;
    node: string;
    status: string;
    age: string;
    cpu: string;
    memory: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 