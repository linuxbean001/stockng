

import { Component, OnInit } from '@angular/core';

import { ChartType } from './cluster.model';

import {
  // tslint:disable-next-line: max-line-length
  simpleLineChart,simplePieChart,pieChart
} from './data';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})

/**
 * Chartist-chart component
 */
export class ClusterComponent implements OnInit {

  constructor() { }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Simple line chart
  simpleLineChart: ChartType;
  // simple pie chart
  simplePieChart: ChartType;
    // simple pie chart
  pieChart: ChartType;


  ngOnInit() {
    this.breadCrumbItems = [];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the chart data
   */
  private _fetchData() {

    // Simple line chart data
    this.simpleLineChart = simpleLineChart;
    // simple pie chart data
    this.simplePieChart = simplePieChart;
     // simple pie chart data
    this.pieChart = pieChart;
    
  }
}

