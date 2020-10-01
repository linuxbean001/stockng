import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-containerregistry',
  templateUrl: './containerregistry.component.html',
  styleUrls: ['./containerregistry.component.scss']
})
export class ContainerregistryComponent implements OnInit {

  HighlightRow : number;
  click : boolean = true;

  constructor(private modalService: NgbModal) { }
// bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit() {

    /**
     * Fetches the data
     */
    this.breadCrumbItems = [];
  }

  reports = [{ "id": 1, "name": "Report1", "date": "May20", "year": "2020", "action": "ss"}, { "id": 2, "name": "Report2", "date": "May20", "year": "2020", "action": "ss"}, { "id": 3, "name": "Report3", "date": "May20", "year": "2020", "action": "ss"}, { "id": 3, "name": "Report4", "date": "May20", "year": "2020", "action": "ss"}];

  ClickedRow(index){
    if(this.click){
      this.HighlightRow = index;
      this.click = false;
    }else{
      this.HighlightRow = null;
      this.click = true;
    }
  }

   /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

  showTable: boolean = false;
  showButton: boolean = true;
  showReport() {
    this.showTable = !this.showTable;
    this.showButton = !this.showButton;
  }




}
