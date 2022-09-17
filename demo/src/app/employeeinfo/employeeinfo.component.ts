import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css'],
  providers: [DataService]
})
export class EmployeeinfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1() {
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2()
  }
  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3()
  }
  updateInfo(frm: any) {

    this.dservice.addinfo(frm)
  }

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

}
