import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './changequota.model';

import { tableData } from './data';

import { ChangequotaService } from './changequota.service';
import { ChangequotaSortableDirective, SortEvent } from './changequota-sortable.directive';

@Component({
  selector: 'app-changequota',
  templateUrl: './changequota.component.html',
  styleUrls: ['./changequota.component.scss'],
  providers: [ChangequotaService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ChangequotaComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ChangequotaSortableDirective) headers: QueryList<ChangequotaSortableDirective>;

  constructor(public service: ChangequotaService) {
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


