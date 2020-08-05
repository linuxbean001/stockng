import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persistentvalumedetails',
  templateUrl: './persistentvalumedetails.component.html',
  styleUrls: ['./persistentvalumedetails.component.scss']
})
export class PersistentvalumedetailsComponent implements OnInit {
breadCrumbItems: Array<{}>;
  constructor() { }

  ngOnInit(): void {
  this.breadCrumbItems =[];
  }

}
