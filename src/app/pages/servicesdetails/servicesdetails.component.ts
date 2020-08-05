import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './servicesdetails.model';

import { tableData } from './data';

import { ServicesdetailsService } from './servicesdetails.service';
import { ServicesdetailsSortableDirective, SortEvent } from './servicesdetails-sortable.directive';

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.scss'],
  providers: [ServicesdetailsService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ServicesdetailsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ServicesdetailsSortableDirective) headers: QueryList<ServicesdetailsSortableDirective>;

  constructor(public service: ServicesdetailsService) {
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



