import { Component, OnInit } from '@angular/core';

import { ChartType } from './nodedetails.model';

import { basicRadialBarChart,basicRadialBarChartMemory,basicRadialBarChartPods} from './data';

@Component({
  selector: 'app-nodesdetails',
  templateUrl: './nodesdetails.component.html',
  styleUrls: ['./nodesdetails.component.scss']
})
export class NodesdetailsComponent implements OnInit {

  // bread crumb items
 breadCrumbItems: Array<{}>;
 basicRadialBarChart:ChartType;
 basicRadialBarChartMemory:ChartType;
 basicRadialBarChartPods:ChartType;

 constructor() { }

 ngOnInit() {
   //this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'Detail', active: true }];
   this.breadCrumbItems =[];
   this._fetchData()
 }

  /**
   * Fetches the chart data 
   */
  private _fetchData() {
    this.basicRadialBarChart = basicRadialBarChart;
    this.basicRadialBarChartMemory = basicRadialBarChartMemory;
    this.basicRadialBarChartPods = basicRadialBarChartPods;
 
  }

}
