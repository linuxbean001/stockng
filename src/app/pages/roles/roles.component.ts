import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './roles.model';

import { tableData } from './data';

import { RolesService } from './roles.service';
import { RolesSortableDirective, SortEvent } from './roles-sortable.directive';
 
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class RolesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(RolesSortableDirective) headers: QueryList<RolesSortableDirective>;

  constructor(public service: RolesService) {
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


