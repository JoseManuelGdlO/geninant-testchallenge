import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConnectionFirebaseService } from 'src/app/services/connection-firebase/connection-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  token:string;

  constructor(
    public storage: Storage,
    public connectionFirebaseService: ConnectionFirebaseService,
    public router: Router
  ) { }

  async ngOnInit() {
    this.token = await this.storage.get('TOKEN');
  }

  async logOut(){
    await this.storage.clear();
    this.connectionFirebaseService.SignOut();
    this.router.navigateByUrl('');

  }

}
