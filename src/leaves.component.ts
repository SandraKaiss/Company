import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaves: any[];
  leaveTypes: any[];
  leaveDays: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLeavesByType('annual');
    this.getLeaveTypes();
  }

  getLeavesByType(type: string) {
    this.http.get<any[]>('http:API- leaves?type=' + type).subscribe(data => {
      this.leaves = data;
    });
  }

  getLeavesByEmployee(employeeId: number) {
    this.http.get<any[]>('http:API-leaves?employeeId=' + employeeId).subscribe(data => {
      this.leaves = data;
    });
  }

  getLeaveTypes() {
    this.http.get<any[]>('http:API- leave-types').subscribe(data => {
      this.leaveTypes = data;
    });
  }

  submitLeaveRequest(leaveType: string) {
    const leave = {
      type: leaveType,
      days: this.leaveDays
    };
    this.http.post('http: API-leaves', leave).subscribe(() => {
      console.log('Leave request submitted successfully');
    });
  }
}
