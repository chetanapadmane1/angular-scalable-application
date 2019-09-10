import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ods } from '../ods.stub';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  title: string;
  volumeProperties: string[];
  rowSelectable: boolean;
  storageIndex: number;
  overview: string;
  storage;

  constructor(private route: ActivatedRoute, translate: TranslateService) { }

  ngOnInit() {
    this.overview = 'Overview';
    this.title = 'Storage';
    this.volumeProperties = ods.volumeHeading;
    this.rowSelectable = true;
    this.route
      .queryParams
      .subscribe(params => {
        this.storageIndex = params['index'] || 0;
      });

    this.getSelectedStorage();
  }


  getSelectedStorage() {
    this.storage = ods.storage.storageData[this.storageIndex];
  }
}
