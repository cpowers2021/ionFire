import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private splashScreen: SplashScreen,
  private statusBar: StatusBar, private menu: MenuController) {
  this.initializeApp();
  }
  initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    this.fcm.getPermission().subscribe();
    this.fcm.listenToMessages().subscribe();
  )}
  }
  closeMenu() {
    this.menu.close();
  }
}
