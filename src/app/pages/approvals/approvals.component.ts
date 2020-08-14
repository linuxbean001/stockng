import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './approvals.model';

import { tableData } from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalsService } from './approvals.service';
import { ApprovalsSortableDirective, SortEvent } from './approvals-sortable.directive';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss'],
  providers: [ApprovalsService, DecimalPipe]
})

/**
 * Advanced table component
 */
export class ApprovalsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  // Table data
  tableData: Table[];

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(ApprovalsSortableDirective) headers: QueryList<ApprovalsSortableDirective>;

  constructor(public service: ApprovalsService,private modalService: NgbModal) {
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



