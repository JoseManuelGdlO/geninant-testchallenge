import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpModalPageModule } from './modals/sign-up-modal/sign-up-modal.module';
import { LoadingModalPageModule } from './modals/loading-modal/loading-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { BodyResponsiveComponent } from './components/body-responsive/body-responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyResponsiveComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    SignUpModalPageModule,
    LoadingModalPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
