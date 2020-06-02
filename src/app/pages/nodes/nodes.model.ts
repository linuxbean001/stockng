// Table data
export interface Table {
    name: string;
    lebels: string;
    ready: string;
    cpurequests:string;
    cpulimits:string;
    memoryrequests:string;
    memorylimits:string;
    age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 