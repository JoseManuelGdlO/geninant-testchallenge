import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginModel } from 'src/app/models/login-model';
import { ConnectionFirebaseService } from 'src/app/services/connection-firebase/connection-firebase.service';
import { SignUpModalPage } from 'src/app/modals/sign-up-modal/sign-up-modal.page';
import { LoadingModalPage } from 'src/app/modals/loading-modal/loading-modal.page';
import { ErrorModel } from 'src/app/models/error-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginData: LoginModel = new LoginModel();
  isRemember = true;

  constructor(
    public toastCtrl: ToastController,
    public router: Router,
    public storage: Storage,
    public connectionFirebaseService: ConnectionFirebaseService,
    public modalCtrl: ModalController,
    public modalLoadingController: ModalController
  ) { }

  async ngOnInit() {
    let userTemp: string = await this.storage.get('USER');

    if (userTemp != null){
      this.loginData.user = userTemp;

      let passwordTemp = await this.storage.get('PASS');
      this.loginData.password = passwordTemp;

      this.login();

    }
  }

  async login(){
    if (this.loginData.user.length == 0){
      return
    }

    if (this.loginData.password.length == 0){
      return
    }
    this.openLoadingModal();

     let response: ErrorModel = await this.connectionFirebaseService.login(this.loginData);

    if(!response.flag){

      if (this.isRemember){
        this.storage.set('USER', this.loginData.user);
        this.storage.set('PASS', this.loginData.password);
      }
     
     await this.storage.set('TOKEN', response.code);
     this.router.navigateByUrl('home');
    } else {
      const toast = this.toastCtrl.create({
        message: response.code,
        duration: 3000,
        position: 'top'
      });
      (await toast).present();
    }

    this.dismissLoading();


  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: SignUpModalPage,
      backdropDismiss: false,
      cssClass: 'modalCss'
    });

    modal.onDidDismiss().then((recive:any) =>{
      let data = recive.data;
      if(data.finish){
        this.loginData.password = data.data.password;
        this.loginData.user = data.data.user;
      }

    })
    return await modal.present();
  }


   //Loading
   async openLoadingModal() {
    let modal = await this.modalLoadingController.create({
      component: LoadingModalPage,
      cssClass: 'modaLoading',
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {

    });

    return await modal.present();
  }

  //// Modal Dismis
  dismissLoading() {
    this.modalLoadingController.dismiss();
  }


}
