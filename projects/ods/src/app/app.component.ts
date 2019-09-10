import { Component } from '@angular/core';
import { ods } from './ods.stub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ODS';
  menuLinks = ods.menu;
}
