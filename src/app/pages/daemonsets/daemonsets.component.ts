import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './daemonsets.model';

import { tableData } from './data';

import { DaemonsetsService } from './daemonsets.service';
import { DaemonsetsSortableDirective, SortEvent } from './daemonsets-sortable.directive';

@Component({
  selector: 'app-daemonsets',
  templateUrl: './daemonsets.component.html',
  styleUrls: ['./daemonsets.component.scss'],
  providers: [DaemonsetsService, DecimalPipe]
})
 
/**
 * Advanced table component
 */
export class DaemonsetsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(DaemonsetsSortableDirective) headers: QueryList<DaemonsetsSortableDirective>;

  constructor(public service: DaemonsetsService) {
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

