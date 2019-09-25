import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router
    ,public toastController: ToastController
    ,public plt: Platform
    ) 
    {


  }
  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigate(['/login'])
  }

}
