// Table data
export interface Table {
    name: string;
    namespace:string;
    lebels: string;
    type:string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 