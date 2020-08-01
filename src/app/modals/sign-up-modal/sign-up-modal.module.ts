import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpModalPageRoutingModule } from './sign-up-modal-routing.module';

import { SignUpModalPage } from './sign-up-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpModalPageRoutingModule
  ],
  declarations: [SignUpModalPage]
})
export class SignUpModalPageModule {}
