import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-containerregistry',
  templateUrl: './containerregistry.component.html',
  styleUrls: ['./containerregistry.component.scss']
})
export class ContainerregistryComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
// bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit() {

    /**
     * Fetches the data
     */
    this.breadCrumbItems = [];
  }

   /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }




}
