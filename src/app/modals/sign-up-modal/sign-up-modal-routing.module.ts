import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpModalPage } from './sign-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpModalPageRoutingModule {}
