// Table data
export interface Table {
    reports: string;
    date: string;
    year: string;
    action: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 