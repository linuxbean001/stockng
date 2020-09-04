
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './namespaces.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { tableData } from './data';

import { NamespacesService } from './namespaces.service';
import { NamespacesSortableDirective, SortEvent } from './namespaces-sortable.directive';

@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.scss'],
  providers: [NamespacesService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class NamespacesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(NamespacesSortableDirective) headers: QueryList<NamespacesSortableDirective>;

  constructor(public service: NamespacesService,private modalService: NgbModal) {
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

