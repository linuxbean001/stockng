// Table data
export interface Table {
    cluster: string;
    organization: string;
    cp: string;
    memory: string;
    storage: string;
    location: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 