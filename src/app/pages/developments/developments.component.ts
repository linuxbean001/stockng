import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './developments.model';

import { tableData } from './data';

import { DevelopmentsService } from './developments.service';
import { DevelopmentsSortableDirective, SortEvent } from './developments-sortable.directive';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss'],
  providers: [DevelopmentsService, DecimalPipe]
})
 
/**
 * Advanced table component
 */
export class DevelopmentsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(DevelopmentsSortableDirective) headers: QueryList<DevelopmentsSortableDirective>;

  constructor(public service: DevelopmentsService) {
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


