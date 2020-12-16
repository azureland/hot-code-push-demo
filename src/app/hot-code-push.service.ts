import { Injectable } from '@angular/core';
import { HotCodePush } from '@ionic-native/hot-code-push/ngx';

@Injectable({
  providedIn: 'root'
})
export class HotCodePushService {

  constructor(private hcp: HotCodePush) {


    this.hcp.onUpdateIsReadyToInstall().subscribe(() => {
      console.log(`update ready to install`);
    });
    
    this.hcp.onAssetsInstallationError().subscribe(() => {
      console.log(`assets installation error`);
    });

    this.hcp.onBeforeInstall().subscribe(() => {
      console.log(`before install update`);
    });

    this.hcp.onUpdateInstalled().subscribe(() => {
      console.log(`update install success`);
    });

    this.hcp.onUpdateInstallFailed().subscribe(() => {
      console.log(`update install failed`);
    });

    this.hcp.onNothingToInstall().subscribe(() => {
      console.log(`noting to install`);
    });

   }

   checkUpdate() {
    console.log('check hcp update');

    this.hcp.fetchUpdate().then(data => { 
      console.log('Update available'); 
      this.hcp.isUpdateAvailableForInstallation().then(update => {
        console.log(`current version is ${update.currentVersion}`);
        console.log(`about to install version is ${update.readyToInstallVersion}`);
        this.hcp.installUpdate();
      })
  }).catch((err) => {
      console.log(err);
      console.log('update unavaiable')

    });


    this.hcp.getVersionInfo().then(version => {
      console.log(`version info is ${JSON.stringify(version)}`);
    })
   }
}
