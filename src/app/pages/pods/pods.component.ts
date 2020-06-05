import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import {ChartType, Table } from './pods.model';

import {OveviewChart,OveviewChartMemory, tableData } from './data';

import { PodsService } from './pods.service';
import { PodsSortableDirective, SortEvent } from './pods-sortable.directive';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.scss'],
  providers: [PodsService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class PodsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
   OveviewChart: ChartType;
   OveviewChartMemory: ChartType;
   

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(PodsSortableDirective) headers: QueryList<PodsSortableDirective>;

  constructor(public service: PodsService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit() {

    //this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Cluster', active: false }];
    this.breadCrumbItems =[];
    this.OveviewChart = OveviewChart;
    this.OveviewChartMemory = OveviewChartMemory;

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

