// Table data
export interface Table {
    name: string;
    provisioner: string;
    parameters: string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 