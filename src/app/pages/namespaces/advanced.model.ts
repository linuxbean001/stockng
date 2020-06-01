// Table data
export interface Table {
    name: string;
    lebels: string;
    status: string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 