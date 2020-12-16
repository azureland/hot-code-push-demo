# hot-code-push-demo

ionic 5 + cordova-hot-code-push 热更新插件 demo

---

## 说明

原来的 `cordova-hot-code-push` (https://github.com/nordnet/cordova-hot-code-push) 插件已经不再维护，

现在使用网友维护的 `teh-hot-code-push-plugin` (https://github.com/amosbaby/cordova-hot-code-push)

---

## 使用方法

基本使用方法与原插件一致,

使用流程（android 为例):

- 1、 修改 web 代码。

- 2、 build /www 代码

      ionic build --engine=cordova --platform=android`

  需要指定 engine 为 cordova， 不然 cordova.js 不会加入到 index.html

  执行完之后会生成 www 文件夹。

- 3、 build 热更新的配置

      cordova-hcp build

  执行完之后 www 文件夹里面会多了 chcp.json 和 chcp.manifest

- 4、 将 www 文件夹放上更新服务器上

---

测试的话可以直接

      npm i -g http-server

      http-server www

按顺序 1, 2, 3 build 完即可测试

---

## 测试环境配置

```

Ionic:

   Ionic CLI                     : 6.12.2
   Ionic Framework               : @ionic/angular 5.5.1
   @angular-devkit/build-angular : 0.1000.8
   @angular-devkit/schematics    : 10.0.8
   @angular/cli                  : 10.0.8
   @ionic/angular-toolkit        : 2.3.3

Cordova:

   Cordova CLI       : 10.0.0
   Cordova Platforms : android 9.0.0
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 5 other plugins)

Utility:

   cordova-res : not installed
   native-run  : 1.3.0

System:

   Android SDK Tools : 26.1.1 (/Users/ian/Library/Android/sdk)
   NodeJS            : v12.18.3 (/Users/ian/.nvm/versions/node/v12.18.3/bin/node)
   npm               : 6.14.6
   OS                : macOS Big Sur
   Xcode             : Xcode 11.6 Build version 11E708
```
