import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '../module/Storage';
import { ods } from '../ods.stub';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string;
  storageList: Storage[];
  storageProperties: string[];
  visibleColumns: string[];
  overview: string;
  deleteStorage: string;
  rowDelete: boolean;
  rowSelection: boolean;


  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Dashboard';
    this.overview = 'Overview';
    this.deleteStorage = 'Delete Storage';
    this.storageList = ods.storage.storageData;
    this.storageProperties = ods.storage.storageHeading;
    this.visibleColumns = ods.storage.visibleColumns;

    this.rowSelection = true;
    this.rowDelete = true;
  }

  displayStorageDetails(event) {
    this.router.navigate(['/storage'], { queryParams: { index: event } });
  }
}
