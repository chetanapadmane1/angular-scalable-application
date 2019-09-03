import { Component, OnInit } from '@angular/core';
import { storageData, storageHeading } from '../ods.stub';
import { Storage } from '../module/Storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  storageList: Storage[];
  storageHeading: string[];
  constructor() { }

  ngOnInit() {
    this.storageList = storageData;
    this.storageHeading = storageHeading;
  }

}
