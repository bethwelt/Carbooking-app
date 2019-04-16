import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 resposeData : any;
  userData = {"username":"", "password":""};

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController,public forgotCtrl: AlertController, public menu: MenuController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
   if(this.userData.username && this.userData.password){
    this.authService.postData(this.userData, "login").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
    if(this.resposeData.userData){
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
   else{
    this.presentToast("Give username and password");
   }
  
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  // go to register page
  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  // login and go to home page
  //login() {
    //this.nav.setRoot(HomePage);
  //}

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
