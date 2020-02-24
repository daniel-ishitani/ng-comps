import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  openedItem = 0;

  @Input() items = [];

  constructor() { }

  ngOnInit() {
  }


  onItemClick(index: number) {
    if(index == this.openedItem) {
      this.openedItem = -1;
    }
    else {
      this.openedItem = index;
    }
  }
}
