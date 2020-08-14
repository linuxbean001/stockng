import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './clusterslist.model';

import { tableData } from './data';

import { ClusterslistService } from './clusterslist.service';
import { ClusterslistSortableDirective, SortEvent } from './clusterslist-sortable.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clusterslist',
  templateUrl: './clusterslist.component.html',
  styleUrls: ['./clusterslist.component.scss'],
  providers: [ClusterslistService, DecimalPipe]
}) 

/**
 * Advanced table component
 */
export class ClusterslistComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ClusterslistSortableDirective) headers: QueryList<ClusterslistSortableDirective>;

  constructor(public service: ClusterslistService,private modalService: NgbModal) {
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
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
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
}



