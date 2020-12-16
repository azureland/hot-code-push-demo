import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HotCodePushService } from './hot-code-push.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private hcpService: HotCodePushService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('app ready');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.resume.subscribe(async () => {
      console.log('app resume');
      this.hcpService.checkUpdate();
    });
  }

}
