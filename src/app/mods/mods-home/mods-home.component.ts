import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  
  modalOpen = false;

  items = [
    {title: 'adsada', content: 'asasdasdasd'},
    {title: 'qweqwe', content: 'qwewqeqweqq'},
    {title: 'zxczxc', content: 'zxczxczxczx'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onToggleModal() {
    this.modalOpen = !this.modalOpen;
  }

}
