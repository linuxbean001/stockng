
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';

import { Table } from './namespacesuser.model';

import { tableData } from './data';

import { NamespacesuserService } from './namespacesuser.service';
import { NamespacesuserSortableDirective, SortEvent } from './namespacesuser-sortable.directive';

@Component({
  selector: 'app-namespacesuser',
  templateUrl: './namespacesuser.component.html',
  styleUrls: ['./namespacesuser.component.scss'],
  providers: [NamespacesuserService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class NamespacesuserComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(NamespacesuserSortableDirective) headers: QueryList<NamespacesuserSortableDirective>;

  constructor(public service: NamespacesuserService,private modalService: NgbModal) {
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


   /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }


}


