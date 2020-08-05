// Table data
export interface Table {
    usergroup: string;
    addeddate: string;
    role: string;
}



// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 