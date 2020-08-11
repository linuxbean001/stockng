// Table data
export interface Table {
    namespace: string;
    environment: string;
    createddate: string;
    location: string;
}


       

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 