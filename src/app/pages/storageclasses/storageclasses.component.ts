import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './storageclasses.model';

import { tableData } from './data';

import { StorageclassesService } from './storageclasses.service';
import { StorageclassesSortableDirective, SortEvent } from './storageclasses-sortable.directive';

@Component({
  selector: 'app-storageclasses',
  templateUrl: './storageclasses.component.html',
  styleUrls: ['./storageclasses.component.scss'],
  providers: [StorageclassesService, DecimalPipe]
})
 
/**
 * Advanced table component
 */
export class StorageclassesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(StorageclassesSortableDirective) headers: QueryList<StorageclassesSortableDirective>;

  constructor(public service: StorageclassesService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit() {

    //this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Cluster', active: false }];
    this.breadCrumbItems =[];

    /**
     * fetch data
     */
    this._fetchData();
  }


  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}


