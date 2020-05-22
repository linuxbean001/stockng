import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containerregistry',
  templateUrl: './containerregistry.component.html',
  styleUrls: ['./containerregistry.component.scss']
})
export class ContainerregistryComponent implements OnInit {

  constructor() { }

  statData;

  ngOnInit() {

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {

    this.statData = [{
    icon: 'bx bx-copy-alt',
    title: 'Images',
    value: '1235'
}, {
    icon: 'bx bx-archive-in',
    title: 'Helm Charts',
    value: '3522'
}];
  }


}
