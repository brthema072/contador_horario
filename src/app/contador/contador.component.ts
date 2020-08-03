import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  day: number = new Date().getDate();
  month: number = new Date().getMonth();
  year: number = new Date().getFullYear();
  
  hour: number = new Date().getHours();
  minute: number = new Date().getMinutes();
  second: number = new Date().getSeconds();
  millisecond: number = new Date().getMilliseconds();

  constructor() { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.day = new Date().getDate();
      this.month = new Date().getMonth()+1;
      this.year = new Date().getFullYear();
      this.hour = new Date().getHours();
      this.minute = new Date().getMinutes();
      this.second = new Date().getSeconds();
      this.millisecond = new Date().getMilliseconds();
    }, 100);

    console.log(new Date())
  }

}
