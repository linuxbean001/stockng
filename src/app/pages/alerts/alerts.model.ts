// Table data
export interface Table {
    alert: string;
    organization: string;
    level: string;
    action: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 