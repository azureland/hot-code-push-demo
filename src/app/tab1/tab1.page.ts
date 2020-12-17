import { Component } from "@angular/core";
import { HotCodePushService } from "../hot-code-push.service";
import { LoggerService } from "../logger.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public logger = this.loggerService.getLogger();

  constructor(
    public loggerService: LoggerService,
    public hcpService: HotCodePushService
  ) {}
}
