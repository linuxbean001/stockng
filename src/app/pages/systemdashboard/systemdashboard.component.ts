import { Component, OnInit } from '@angular/core';

import {gaugeChart,gaugeMemory,gaugeStorage } from './data';

import { ChartType } from './echart.model';

@Component({
  selector: 'app-systemdashboard',
  templateUrl: './systemdashboard.component.html',
  styleUrls: ['./systemdashboard.component.scss']
})

/**
 * E-chart component
 */
export class SystemdashboardComponent implements OnInit {

  constructor() { }

  gaugeChart: ChartType;
  gaugeMemory: ChartType;
  gaugeStorage: ChartType;

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
    this.gaugeMemory = gaugeMemory;
    this.gaugeStorage = gaugeStorage;
  }

}


