import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens';
import { TodoListComponent } from './components/todo-list';

// Pages
import { HomeComponent } from "./pages/home";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
