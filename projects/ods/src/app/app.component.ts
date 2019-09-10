import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ods } from './ods.stub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ODS';
  menuLinks = ods.menu;
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
