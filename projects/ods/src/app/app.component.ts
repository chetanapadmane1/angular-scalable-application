import { Component } from '@angular/core';
import { menu } from './ods.stub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ods';
  menuLinks = menu;
}
