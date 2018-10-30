import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Login } from './components/login/login';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { FirstComponent } from './views/firstComponent/firstComponent.component';
import { SecondComponent } from './views/secondComponent/secondComponent.component';
import { DetailsComponent } from './components/details/detailsComponent.component';

import { DataService } from './service/data.service';

import { AppBackgroundDirective } from './directive/appBackground.directive';
import { AppInterceptor } from './app-interceptor.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FirstComponent,
    SecondComponent,
    DetailsComponent,
    AppBackgroundDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    { provide: DataService, useClass: DataService},
    { provide: Login, useValue: Login }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
