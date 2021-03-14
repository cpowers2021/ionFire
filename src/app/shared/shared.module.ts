import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule
  ]
  exports: [
    ProfileComponent, LoginComponent
  ]
})
export class SharedModule { }
