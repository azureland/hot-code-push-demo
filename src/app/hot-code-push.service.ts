import { Injectable } from "@angular/core";
import {
  ErrorCode,
  HotCodePush,
  HotCodePushError,
  HotCodePushUpdate,
  HotCodePushVersion,
} from "@ionic-native/hot-code-push/ngx";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class HotCodePushService {
  private logger = this.loggerService.getLogger();

  constructor(private hcp: HotCodePush, private loggerService: LoggerService) {
    this.hcp.onUpdateIsReadyToInstall().subscribe(() => {
      this.logger.log(`update ready to install`);
    });

    this.hcp.onAssetsInstallationError().subscribe(() => {
      this.logger.log(`assets installation error`);
    });

    this.hcp.onBeforeInstall().subscribe(() => {
      this.logger.log(`before install update`);
    });

    this.hcp.onUpdateInstalled().subscribe(() => {
      this.logger.log(`update install success`);
    });

    this.hcp.onUpdateInstallFailed().subscribe(() => {
      this.logger.log(`update install failed`);
    });

    this.hcp.onNothingToInstall().subscribe(() => {
      this.logger.log(`noting to install`);
    });
  }

  async checkUpdate() {
    this.logger.log("check hcp update");
    try {
      let update = await this.hcp.fetchUpdate();
      this.logger.log("Update available");
    } catch (err) {
      this.logger.log("update unavaiable");
      this.logger.log(JSON.stringify(err));
      let error = err as HotCodePushError;
      if (error.code == ErrorCode.APPLICATION_BUILD_VERSION_TOO_LOW) {
        // chcp.json 的 min_native_interface 大于当前 app 的 config.xml  里面的 native_interface
        // app 版本太低， 需要更新 app 才能继续使用
        // this.requestApplicationUpdate();
      }
    }
  }

  async isUpdateAvailableForInstallation() {
    try {
      let update: HotCodePushUpdate = await this.hcp.isUpdateAvailableForInstallation();
      this.logger.log(`current version is ${update.currentVersion}`);
      this.logger.log(
        `about to install version is ${update.readyToInstallVersion}`
      );
      // this.hcp.installUpdate();
    } catch (err) {
      this.logger.log(JSON.stringify(err));
      this.logger.log(`nothing to be installed`);
    }
  }

  /**
   * app 版本太低，提示需要更新 apk
   */
  async requestApplicationUpdate() {
    try {
      let result = await this.hcp.requestApplicationUpdate(
        "APP 版本过低，需要更新才能使用"
      );
      // permit to update
      this.logger.log("user permit update");
    } catch (err) {
      this.logger.log(JSON.stringify(err));
      // decline to update
      this.logger.log("user decline update");
    }
  }

  async installUpdate() {
    try {
      await this.hcp.installUpdate();
      this.logger.log("install update successed");
    } catch (err) {
      this.logger.log(JSON.stringify(err));
      this.logger.log("install update failed");
    }
  }

  async getVersionInfo() {
    let version: HotCodePushVersion = await this.hcp.getVersionInfo();
    this.logger.log(`version info is ${JSON.stringify(version)}`);
  }
}
