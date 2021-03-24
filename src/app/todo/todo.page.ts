import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {switchMap, map } from 'rxjs/operators';
import { DbService } from '../services/db.service';

import { ModalController } from '@ionic/angular';
import { TodoFormComponent } from './todo-form.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todos;
  filtered;

  filter = new BehaviorSubject(null);
  constructor(public dc: DbService, public modal: ModalController, public auth: AuthService) { }

  ngOnInit() {
    this.todos = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('todos', ref =>
          ref.where('uid', '==', user.uid).orderBy('createdAt', 'desc').limit(25)
        )
    ), shareReplay(1)
    this.filtered = this.filter.pipe(
      switchMap(filter => {
        return this.todos.pipe(
          map(arr =>
          (arr as any[]).filter(
            obj => (status ? obj.status === status : true)
          )
        );
      })
    )
   );
  }

  updateFilter(val) {
    this.filter.next(val);
  }

  trackById(idx, todo) {
  return todo.id;
  }

  deleteTodo(todo) {
    this.db.delete(`todos/${todo.id}`);
  }

  toggleStatus(todo) {
    const status = todo.status === 'complete' ? 'pending' : 'complete';
    this.db.updateAt(`todos/${todo.id}`, { status });
  }

}
