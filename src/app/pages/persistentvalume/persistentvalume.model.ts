// Table data
export interface Table {
    name: string;
    status:string;
    volume: string;
    capacity:string;
    accessmodels:string;
    storageclass:string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 