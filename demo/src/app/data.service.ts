import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ['riya', '001', 'riya@gmail.com']
  info2: string[] = ['raja', '002', 'raja@gmail.com']
  info3: string[] = ['raji', '003', 'raji@gmail.com']


  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }

  addinfo(info: any) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1


  }
  constructor() { }
}
