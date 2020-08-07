// Table data
export interface Table {
    usergroup: string;
    addeddate: string;
    role: string;
}

export interface TableUser {
    usergroup: string;
    group: string;
}

// Search Data
export interface SearchResultOther {
    tablesuser: Table[];
    total: number;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 