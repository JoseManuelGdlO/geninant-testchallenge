import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ListModel, MarcasModel } from 'src/app/models/list-model';
import { LoadingModalPage } from 'src/app/modals/loading-modal/loading-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  token:string;
  list: ListModel;
  marks: MarcasModel;

  constructor(
    public modalLoadingController: ModalController,
    public router: Router,
    public storage: Storage,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.getInit();
  }

  async getInit(event?) {
    this.openLoadingModal();
    try {
        const response = await this.apiService.getAuto();

      if (response.response) {
        this.list = response.data.resultados;
        this.marks = response.data.marcas;
      }
    } catch(error) {
      console.error(error);
    }
    this.dismissLoading();
    if(event) {
      event.target.complete();
    }
  }

  async addFilter(value: CustomEvent) {
    this.openLoadingModal();
    const parameters = `?idMarca=${value.detail.value}`;
    const response = await this.apiService.getAuto(parameters)
    if (response.response) {
      this.list = response.data.resultados;
    }
    this.dismissLoading();
    
    
  }

  async logOut(){
    await this.storage.clear();
    await this.storage.set('LOGGED', false);
    this.router.navigateByUrl('');
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
