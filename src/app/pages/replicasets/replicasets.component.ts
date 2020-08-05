import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './replicasets.model';

import { tableData } from './data';

import { ReplicasetsService } from './replicasets.service';
import { ReplicasetsSortableDirective, SortEvent } from './replicasets-sortable.directive';

@Component({
  selector: 'app-replicasets',
  templateUrl: './replicasets.component.html',
  styleUrls: ['./replicasets.component.scss'],
  providers: [ReplicasetsService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ReplicasetsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ReplicasetsSortableDirective) headers: QueryList<ReplicasetsSortableDirective>;

  constructor(public service: ReplicasetsService) {
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

