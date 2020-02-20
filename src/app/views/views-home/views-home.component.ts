import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 10, label: '# of Users'},
    {value: 100, label: 'Revenue'},
    {value: 1000, label: 'Reviews'},
  ];

  items = [
    {image: '/assets/images/awkwardseal.jpg', title: 'seal', description: 'awkward seal'},
    {image: '/assets/images/download.png', title: 'download', description: 'download symbol'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
