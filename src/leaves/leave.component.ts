import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddLeaveModalComponent } from './leave.model';
import { Leave } from './leave.model';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';


class LeaveService {

  private baseUrl = 'https:----api';
  constructor(private http: HttpClient) { }
  getLeavesByTypeAndEmployee(): Observable<Leave[]> {
    return this.http.get<Leave[]>(`${this.baseUrl}/leaves?type=byTypeAndEmployee`);
  }
}

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  addLeaveModalVisible: boolean = false;

  columns = [
    { prop: 'employee' },
    { prop: 'leaveType' },
    { prop: 'fromDate' },
    { prop: 'toDate' },
    { prop: 'leaveDays' }
  ];

  constructor(private leavesService: LeaveService, private modalService: NgbModal) { }

  ngOnInit() {
    // Call Get Leaves by Type and by Employee API
    this.leavesService.getLeavesByTypeAndEmployee().subscribe((response) => {
      this.LeavesComponent = response;
    });
  }

  openAddLeaveModal() {
    // Open the Add Leave Modal
    const modalRef = this.modalService.open(AddLeaveModalComponent, { centered: true });
    modalRef.componentInstance.modalVisible = true;

    // Refresh leaves data after the modal is closed
    modalRef.result.then((result) => {
      if (result) {
        this.leavesService.getLeavesByTypeAndEmployee().subscribe((response) => {
          this.leaves = response;
        });
      }
    });
  }

}
