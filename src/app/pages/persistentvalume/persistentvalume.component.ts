import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './persistentvalume.model';

import { tableData } from './data';

import { PersistentvalumeService } from './persistentvalume.service';
import { PersistentvalumeSortableDirective, SortEvent } from './persistentvalume-sortable.directive';

@Component({
  selector: 'app-persistentvalume',
  templateUrl: './persistentvalume.component.html',
  styleUrls: ['./persistentvalume.component.scss'],
  providers: [PersistentvalumeService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class PersistentvalumeComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(PersistentvalumeSortableDirective) headers: QueryList<PersistentvalumeSortableDirective>;

  constructor(public service: PersistentvalumeService) {
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


