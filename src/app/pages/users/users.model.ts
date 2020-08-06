// Table data
export interface Table {
    name: string;
    role: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 