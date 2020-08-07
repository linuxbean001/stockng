// Table data
export interface Table {
    namespace: string;
    environ: string;
    created: string;
    loca: string;
}


// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 