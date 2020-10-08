import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';

import { Table } from './containerregistry.model';

import { tableData } from './data';

import { ContainerregistryService } from './containerregistry.service';
import { ContainerregistrySortableDirective, SortEvent } from './containerregistry-sortable.directive';

@Component({
  selector: 'app-containerregistry',
  templateUrl: './containerregistry.component.html',
  styleUrls: ['./containerregistry.component.scss'],
  providers: [ContainerregistryService, DecimalPipe]
})
export class ContainerregistryComponent implements OnInit {

  HighlightRow : number;
  click : boolean = true;

  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ContainerregistrySortableDirective) headers: QueryList<ContainerregistrySortableDirective>;

  constructor(public service: ContainerregistryService,private modalService: NgbModal) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngOnInit() {

    //this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Cluster', active: false }];
    this.breadCrumbItems =[];

    /**
     * fetch data
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
  }

   /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

  ClickedRow(index){
    if(this.HighlightRow === index){
      this.HighlightRow = null;
      this.click = true;
    }else{
      this.HighlightRow = index;
      this.click = false;
    }
  }


  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
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
