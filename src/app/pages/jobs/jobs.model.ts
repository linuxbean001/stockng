// Table data
export interface Table {
    name: string;
    namespace:string;
    lebels: string;
    pods: string;
    age: string;
    images:string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 