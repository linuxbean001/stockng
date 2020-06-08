import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './ingresses.model';

import { tableData } from './data';

import { IngressesService } from './ingresses.service';
import { IngressesSortableDirective, SortEvent } from './ingresses-sortable.directive';

@Component({
  selector: 'app-ingresses',
  templateUrl: './ingresses.component.html',
  styleUrls: ['./ingresses.component.scss'], 
  providers: [IngressesService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class IngressesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(IngressesSortableDirective) headers: QueryList<IngressesSortableDirective>;

  constructor(public service: IngressesService) {
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

