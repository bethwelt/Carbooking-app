import {Component} from "@angular/core";
//import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import {NavController, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

 resposeData : any;
  userData = {"username":"", "password":"","email":"","name":""};
  constructor(public navCtrl : NavController, public authService : AuthService, private toastCtrl:ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  register() {
    if(this.userData.username && this.userData.password && this.userData.email && this.userData.name){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.userData){
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(HomePage);
    }
    else{
      this.presentToast("Please give valid username and password");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }

  login() {
    this
      .navCtrl
      .push(LoginPage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

 
}
