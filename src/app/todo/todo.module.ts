import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path:'',
    component: TodoPage
  },
  {
    path: ':id',
    component: TodoDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule
  ],
  declarations: [TodoPage]
})
export class TodoPageModule {}
