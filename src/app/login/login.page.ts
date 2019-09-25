import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router
    ,public toastController: ToastController
    ,public loadingController: LoadingController
    ,public navCtrl: NavController
    ) 
    {
    
   }

  ngOnInit() {
  }
  
  async presentLoadingWithOptions(msg:string,duration:number) {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: duration,
      message: msg,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present()
    return new  Promise( resolve => setTimeout(resolve, duration) );
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }
  async presentToastWithOptions(msg:string) {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'home',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  Login(){
    (async () => { 
      
      await this.presentLoadingWithOptions('Please wait ...',1000);
      this.presentToast('Login Success');
      this.navCtrl.navigateForward(['/home', {
        UID:"123" ,
        name:"Test Login Name "
      }]);
      //this.router.navigate(['/home',{data:"UID:123"}])
      // Do something after
    })();
  }
  LoginWithFacebook(){

    (async () => { 
      await this.presentLoadingWithOptions('Please wait ...',1000);
      this.presentToast('Login With Facebook Success');
      this.router.navigate(['/home'])
      // Do something after
    })();

  }
  LoginWithGoogle(){

    (async () => { 
      await this.presentLoadingWithOptions('Please wait ...',1000);
      this.presentToast('Login With Google Success');
      this.router.navigate(['/home'])
      // Do something after
    })();

  }
  SingUp(){
    this.router.navigate(['/signup'])
  }

}
