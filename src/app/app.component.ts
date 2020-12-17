import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HotCodePushService } from './hot-code-push.service';
import { timer } from 'rxjs';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private logger = this.loggerService.getLogger();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private hcpService: HotCodePushService,
    private loggerService: LoggerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.loggerService.getLogger().log('platform ready');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.resume.subscribe(async () => {
      this.loggerService.getLogger().log('platform resume');
      this.hcpService.checkUpdate();
    });
  }

}
