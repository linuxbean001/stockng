import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './configmaps.model';

import { tableData } from './data';

import { ConfigmapsService } from './configmaps.service';
import { ConfigmapsSortableDirective, SortEvent } from './configmaps-sortable.directive';

@Component({
  selector: 'app-configmaps',
  templateUrl: './configmaps.component.html',
  styleUrls: ['./configmaps.component.scss'],
  providers: [ConfigmapsService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ConfigmapsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ConfigmapsSortableDirective) headers: QueryList<ConfigmapsSortableDirective>;

  constructor(public service: ConfigmapsService) {
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


