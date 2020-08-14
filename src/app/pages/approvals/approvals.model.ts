// Table data
export interface Table {
     requesttype: string;
    purpose: string;
    organization: string;
    status: string;
    priority: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 