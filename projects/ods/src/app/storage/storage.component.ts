import { Component, OnInit } from '@angular/core';
import { Volume } from '../module/Volume';
import { volumeHeading, volumeData } from '../ods.stub';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  volumeList: Volume[];
  volumeHeading: string[];
  rowSelectable: boolean;

  constructor() { }

  ngOnInit() {
    this.volumeHeading = volumeHeading;
    this.volumeList = volumeData;
    this.rowSelectable = true;
  }

}
