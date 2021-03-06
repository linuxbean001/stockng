import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './persistent.model';

import { tableData } from './data';

import { PersistentService } from './persistent.service';
import { PersistentSortableDirective, SortEvent } from './persistent-sortable.directive';

@Component({
  selector: 'app-persistent',
  templateUrl: './persistent.component.html',
  styleUrls: ['./persistent.component.scss'],
  providers: [PersistentService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class PersistentComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(PersistentSortableDirective) headers: QueryList<PersistentSortableDirective>;

  constructor(public service: PersistentService) {
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

