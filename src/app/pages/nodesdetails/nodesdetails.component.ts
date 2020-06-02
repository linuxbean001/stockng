import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodesdetails',
  templateUrl: './nodesdetails.component.html',
  styleUrls: ['./nodesdetails.component.scss']
})
export class NodesdetailsComponent implements OnInit {

  // bread crumb items
 breadCrumbItems: Array<{}>;

 constructor() { }

 ngOnInit() {
   //this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'Detail', active: true }];
   this.breadCrumbItems =[];
 }

}
