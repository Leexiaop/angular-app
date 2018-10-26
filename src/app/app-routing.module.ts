import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { FirstComponent } from './views/firstComponent/firstComponent.component';
import { SecondComponent } from './views/secondComponent/secondComponent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app-login',
    pathMatch: 'full'
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/app-main/app-first-component', pathMatch: 'full'},
      { path: 'app-first-component', component: FirstComponent },
      { path: 'app-second-component', component: SecondComponent }
    ]
  }
];

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
