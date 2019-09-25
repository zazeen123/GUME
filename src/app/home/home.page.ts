import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideIndex: number = 0 ;
  tmpimage  = document.getElementsByClassName("mySlides") as any;
  isLandscape:boolean;
  constructor(private router: Router
    ,public toastController: ToastController
    ,public plt: Platform
    ) 
    {


  }
  
  ngOnInit() {
    (async () => { 
      console.log(this.tmpimage)
      await this.delay(1000);
  
      // Do something after
      this.showSlides()
    })();
    
  }

  showSlides() {
    var i =0 ;
    var slides = this.tmpimage;
    var dots = document.getElementsByClassName("dot");
    if(slides[0].style != undefined){
    for (i = 0; i < slides.length; i++) {
      slides[i].style = "display:none";  
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length)
    {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style = "display:block";  
    dots[this.slideIndex-1].className += " active";
    }else{
      console.log("error")
    }
    (async () => { 
      await this.delay(2000);
      this.showSlides()
  })();
  }

  gotoLogin(){
    this.router.navigate(['/login'])
  }
  gotoSingup(){
    this.router.navigate(['/signup'])
  }

  gotoTest(){
    this.router.navigate(['/signup'])
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
