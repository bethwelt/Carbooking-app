import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  userdata:any;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();
    const user = JSON.parse(localStorage.getItem("userData"));
   
console.log(user);
		if(user !==null){
        this.userdata = user.userData;
		  this.rootPage =HomePage;
			this.appMenuItems = [
			  {title: 'Home', component: HomePage, icon: 'home'},
			  {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'}
			];
		}
		else{
        this.userdata = '';
		this.rootPage =LoginPage;
		}
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  backToWelcome(){
   //const root = this.app.getRootNav();
    //root.popToRoot();
	this.rootPage = LoginPage;
  }

  logout(){
    //Api Token Logout 
    
    localStorage.clear();
    //this.menu.enable(false);
     setTimeout(()=> this.backToWelcome(), 1000);
    
  }

  //logout() {
    //this.nav.setRoot(LoginPage);
  //}

}
