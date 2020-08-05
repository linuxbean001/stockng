// Table data
export interface Table {
    name: string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 