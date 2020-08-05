// Table data
export interface Table {
    name: string;
    node:string;
    status: string;
    restarts: string;
    age:string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 