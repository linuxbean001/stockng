// Table data
export interface Table {
	name: string;
	capacity: string;
	accessmodes: string;
	reclaimpolicy: string;
	status: string;
	claim: string;
	storageclass: string;
	reason: string;
	age: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
 
