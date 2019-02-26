import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  hero = 'qwert';

  constructor() { }

  ngOnInit() {
  }
  
  abc(){
    return this.hero;
  }

}
