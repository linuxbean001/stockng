import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import {gaugeChart,gaugeMemory,gaugeStorage,statData } from './data';

import { ChartType } from './echart.model';

import { ApexChartType } from './apex.model';

import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './budashboard.model';

import { tableData } from './tabledata';

import { BudashboardService } from './budashboard.service';
import { BudashboardSortableDirective, SortEvent } from './budashboard-sortable.directive';

import {
  columnlabelChart, monthlyEarningChart
} from './apexdata';

@Component({
  selector: 'app-budashboard',
  templateUrl: './budashboard.component.html',
  styleUrls: ['./budashboard.component.scss'],
  providers: [BudashboardService, DecimalPipe]
})

/**
 * E-chart component
 */
export class BudashboardComponent implements OnInit {

  gaugeChart: ChartType;
  gaugeMemory: ChartType;
  gaugeStorage: ChartType;

  columnlabelChart: ApexChartType;
  monthlyEarningChart: ApexChartType;

  statData;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(BudashboardSortableDirective) headers: QueryList<BudashboardSortableDirective>;

  constructor(public service: BudashboardService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    //this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];

    this._fetchData();
  }

  /**
   * Fetch the chart data
   */
  private _fetchData() {

    this.gaugeChart = gaugeChart;
    this.gaugeMemory = gaugeMemory;
    this.gaugeStorage = gaugeStorage;

    this.columnlabelChart = columnlabelChart;
    this.monthlyEarningChart = monthlyEarningChart;

    this.statData = statData;
    this.tableData = tableData;
  }

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

