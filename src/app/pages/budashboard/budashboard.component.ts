import { Component, OnInit } from '@angular/core';

import {gaugeChart } from './data';

import { ChartType } from './echart.model';

@Component({
  selector: 'app-budashboard',
  templateUrl: './budashboard.component.html',
  styleUrls: ['./budashboard.component.scss']
})

/**
 * E-chart component
 */
export class BudashboardComponent implements OnInit {

  constructor() { }

  gaugeChart: ChartType;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    //this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];

    this._fetchData();
  }

  /**
   * Fetch the chart data
   */
  private _fetchData() {

    this.gaugeChart = gaugeChart;
  }

}

