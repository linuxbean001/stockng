import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './replication.model';

import { tableData } from './data';

import { ReplicationService } from './replication.service';
import { ReplicationSortableDirective, SortEvent } from './replication-sortable.directive';

@Component({
  selector: 'app-replication',
  templateUrl: './replication.component.html',
  styleUrls: ['./replication.component.scss'],
  providers: [ReplicationService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ReplicationComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ReplicationSortableDirective) headers: QueryList<ReplicationSortableDirective>;

  constructor(public service: ReplicationService) {
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

