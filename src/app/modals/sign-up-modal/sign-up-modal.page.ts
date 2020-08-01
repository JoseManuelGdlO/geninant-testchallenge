import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginModel } from 'src/app/models/login-model';
import { ConnectionFirebaseService } from 'src/app/services/connection-firebase/connection-firebase.service';
import { ErrorModel } from 'src/app/models/error-model';
import { LoadingModalPage } from '../loading-modal/loading-modal.page';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.page.html',
  styleUrls: ['./sign-up-modal.page.scss'],
})
export class SignUpModalPage implements OnInit {

  signUpData: LoginModel = new LoginModel();
  message: string = ' ';

  validEmail: boolean = false;
  validPassword: boolean = false;
  validrepeatPassword: boolean = false;

  constructor(
    public modalController: ModalController,
    public connectionFirebaseService: ConnectionFirebaseService,
    public toastController: ToastController,
    public modalLoadingController: ModalController
  ) { }

  ngOnInit() {
    this.signUpData.password = '';
    this.signUpData.user = '';
    this.signUpData.repeatPassword = '';
  }

  dismissModal(finish: boolean){
    this.modalController.dismiss(
      {
        data:this.signUpData,
        finish
      });
  }

  checkEmail(){
    let email =  this.signUpData.user;
    let index = email.indexOf('@');

    if(index == -1){
      this.validEmail =  false;
      this.message = 'Tu correo no contiene un @';
      return
    }

    let domain = email.substr(index, email.length);

    if(domain.indexOf('.') == -1){
      this.validEmail =  false;
      this.message = 'Debes registrar un correo valido';
      return
    }

    this.message = '';
    this.validEmail = true;
  }

  validateRepeatPassword(){
    let password = this.signUpData.password;
    let repeatPassword = this.signUpData.repeatPassword;

    if(password != repeatPassword){
      this.validrepeatPassword = false;
      this.message = 'Las contraseñas no coinciden'
      return
    }

    this.validrepeatPassword = true;
    this.message = ' '
    
  }

  validatePassword(){
    let password = this.signUpData.password;

    if(password.length < 6){
      this.validPassword = false;
      this.message = 'La contraseña es menor de 6 digitos'
      return
    }

    this.validPassword = true;
    this.message = ' '

  }
  
  isDisabled(): boolean{
    if(this.signUpData.password.length == 0){
      return false;
    }

    if(this.signUpData.user.length == 0){
      return false;
    }

    if(this.signUpData.repeatPassword.length == 0){
      return false;
    }

    if(!this.validEmail){
      return false;
    }

    if(!this.validPassword){
      return false;
    }

    if(!this.validrepeatPassword){
      return false;
    }

    return true;
  }

  async signUp(){
    this.openLoadingModal()
   let response: ErrorModel = await this.connectionFirebaseService.signUp(this.signUpData);

   if(!response.flag){
    const toast = await this.toastController.create({
      message: 'Registro Existoso!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.dismissLoading();
    this.dismissModal(true);
   } else {
    this.dismissLoading();
     this.message = response.code;
   }
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
