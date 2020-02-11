import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'John', age: 20, job: 'Designer', employed: true },
    { name: 'Jane', age: 20, job: 'Designer', employed: false },
    { name: 'Jill', age: 20, job: 'Designer', employed: true },
  ];

  headers = [
    { key: 'employed', label: 'Employed' },
    { key: 'name', label: 'Name' },    
    { key: 'age', label: 'Age' },    
    { key: 'job', label: 'Job' },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
