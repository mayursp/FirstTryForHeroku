import { Component, OnInit } from '@angular/core';
import { FirstCompComponent } from '../first-comp/first-comp.component';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],
  providers: [FirstCompComponent],
})
export class SecondCompComponent implements OnInit {

  
  constructor(private manoli: FirstCompComponent) {
      
   }

  ngOnInit() {
  }

  kaibi(){
    return this.manoli.abc();
  }

}
