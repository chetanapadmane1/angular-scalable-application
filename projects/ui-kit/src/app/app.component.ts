import { Component } from '@angular/core';
import { menu } from './ui-kit.stub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-kit';
  menuList: any[] = menu;
}
