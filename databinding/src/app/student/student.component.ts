import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   stuid: number=80;
   btnbtn:boolean=true;
  constructor() { }
  onToggle(){
    if (this.stuid==80){
        this.stuid=90;
    }
    else{
      this.stuid=100;
    }
   }
  ngOnInit(): void {
    setTimeout(() => {
      this.btnbtn=false;
    }, 2000);
   
   

  }

}
